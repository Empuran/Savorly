"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Chrome, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { signUp, loginWithGoogle } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            await signUp(email, password, name);
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError("");
        try {
            await loginWithGoogle();
        } catch (err: any) {
            setError("Could not sign up with Google. Please try again.");
        }
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Right side - Visual (Switched for Signup for variety) */}
            <div className="hidden lg:block relative overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                    alt="Delicious Food"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-20 text-white text-right">
                    <blockquote className="space-y-4">
                        <p className="text-4xl font-serif font-bold leading-tight">
                            "One cannot think well, love well, sleep well, if one has not dined well."
                        </p>
                        <footer className="text-lg font-medium italic">— Virginia Woolf</footer>
                    </blockquote>
                </div>
            </div>

            {/* Left side - Content/Form */}
            <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-24 bg-background">
                <div className="max-w-md w-full mx-auto">
                    {/* Logo */}
                    <div className="mb-12">
                        <h1 className="text-3xl font-serif font-bold text-primary flex items-center gap-2">
                            <span className="bg-primary text-white p-1 rounded-lg">S</span>
                            Savorly
                        </h1>
                    </div>

                    <div className="space-y-2 mb-8 text-center sm:text-left">
                        <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground">
                            Create account
                        </h2>
                        <p className="text-muted-foreground">
                            Sign up to start saving and creating amazing recipes.
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full h-12 rounded-xl mb-6 gap-3 font-medium border-border/60 hover:bg-secondary hover:text-secondary-foreground transition-all shadow-sm"
                        onClick={handleGoogleLogin}
                    >
                        <Chrome className="h-5 w-5 text-[#4285F4]" />
                        Sign up with Google
                    </Button>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border/60" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-4 text-muted-foreground font-medium uppercase tracking-wider">
                                Or sign up via email
                            </span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-semibold">Full Name</Label>
                            <Input
                                id="name"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="h-12 rounded-xl border-border/60 focus-visible:ring-primary/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-12 rounded-xl border-border/60 focus-visible:ring-primary/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-semibold">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="h-12 rounded-xl border-border/60 focus-visible:ring-primary/20"
                            />
                        </div>

                        {error && (
                            <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 animate-in fade-in slide-in-from-top-1">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full h-12 rounded-xl text-base font-semibold transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] bg-primary text-white"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>
                    </form>

                    <p className="mt-8 text-center text-sm text-muted-foreground font-medium">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-bold hover:underline">
                            Sign in instead
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
