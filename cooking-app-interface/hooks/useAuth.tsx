"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    User,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    loginWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string, name: string) => Promise<void>;
    deleteAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const sendWelcomeEmail = async (email: string, name: string) => {
        try {
            await fetch("/api/welcome", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name }),
            });
        } catch (error) {
            console.error("Failed to trigger welcome email:", error);
        }
    };

    // Synchronize auth user with Firestore "users" collection
    const syncUserToFirestore = async (firebaseUser: User, extraData: any = {}) => {
        const userRef = doc(db, "users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            await setDoc(userRef, {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                displayName: firebaseUser.displayName || extraData.name || "",
                photoURL: firebaseUser.photoURL || "",
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString(),
                ...extraData
            });
            // New user! Send welcome email
            sendWelcomeEmail(firebaseUser.email!, firebaseUser.displayName || extraData.name || "").catch(console.error);
        } else {
            await setDoc(userRef, {
                lastLogin: new Date().toISOString(),
                photoURL: firebaseUser.photoURL || userSnap.data().photoURL || "",
            }, { merge: true });
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                // Background sync
                syncUserToFirestore(firebaseUser).catch(console.error);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error logging in with Google:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error signing in:", error);
            throw error;
        }
    };

    const signUp = async (email: string, password: string, name: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name });
        } catch (error) {
            console.error("Error signing up:", error);
            throw error;
        }
    };

    const deleteAccount = async () => {
        if (!auth.currentUser) return;

        try {
            const { deleteDoc, doc } = await import("firebase/firestore");
            const { deleteUser } = await import("firebase/auth");

            const uid = auth.currentUser.uid;

            // 1. Delete Firestore user data
            await deleteDoc(doc(db, "users", uid));

            // 2. Delete Auth record
            await deleteUser(auth.currentUser);

            console.log("Account deleted successfully");
        } catch (error) {
            console.error("Error deleting account:", error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout, signIn, signUp, deleteAccount }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
