"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteGuard({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading) {
            const isAuthPage = pathname === "/login" || pathname === "/signup";

            if (!user && !isAuthPage) {
                // Redirect unauthenticated users to login
                router.push("/login");
            } else if (user && isAuthPage) {
                // Redirect authenticated users away from login/signup
                router.push("/");
            }
        }
    }, [user, loading, pathname, router]);

    // Show nothing while loading auth state or if we are about to redirect
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    const isAuthPage = pathname === "/login" || pathname === "/signup";

    // If redirection is pending, keep showing loading state for a smoother transition
    if ((!user && !isAuthPage) || (user && isAuthPage)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return <>{children}</>;
}
