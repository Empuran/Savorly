"use client";

import { useState, useEffect } from "react";
import {
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    onSnapshot
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { RecipeData } from "@/lib/data";

export function useRecipes() {
    const [recipes, setRecipes] = useState<RecipeData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "recipes"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const recipesData: RecipeData[] = [];
            querySnapshot.forEach((doc) => {
                recipesData.push({ id: doc.id, ...doc.data() } as RecipeData);
            });
            setRecipes(recipesData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { recipes, loading };
}

export function useRecipe(id: string) {
    const [recipe, setRecipe] = useState<RecipeData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        const docRef = doc(db, "recipes", id);
        const unsubscribe = onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                setRecipe({ id: doc.id, ...doc.data() } as RecipeData);
            } else {
                setRecipe(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [id]);

    return { recipe, loading };
}

export function useCategories() {
    const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "categories"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const categoriesData: { name: string; count: number }[] = [];
            querySnapshot.forEach((doc) => {
                categoriesData.push({ ...doc.data() } as { name: string; count: number });
            });
            setCategories(categoriesData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { categories, loading };
}
