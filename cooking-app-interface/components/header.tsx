"use client"

import { useState } from "react"
import { Search, Menu, X, Heart, ShoppingCart, User, LogOut, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/useAuth"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const navLinks = [
  { label: "Recipes", href: "#recipes-section" },
  { label: "Meal Plan", href: "#meal-plan" },
  { label: "Pantry", href: "#pantry" },
  { label: "Community", href: "#community" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const { user, logout, deleteAccount } = useAuth()
  const router = useRouter()

  const handleDeleteAccount = async () => {
    try {
      setIsDeleting(true)
      await deleteAccount()
      setMobileMenuOpen(false)
      router.push("/login")
    } catch (error: any) {
      console.error("Failed to delete account:", error)
      if (error.code === 'auth/requires-recent-login') {
        alert("For your security, you need to sign out and sign back in again before you can delete your account. This prevents accidental deletions from old sessions.")
      } else {
        alert("Failed to delete account. Please try again or re-authenticate.")
      }
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative h-10 w-32 overflow-hidden">
              <Image
                src="/logo.svg"
                alt="Savorly Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-lg transition-colors hover:text-foreground hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            {searchOpen ? (
              <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-200">
                <Input
                  type="search"
                  placeholder="Search recipes..."
                  className="w-56 h-9"
                  autoFocus
                />
                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setSearchOpen(false)}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close search</span>
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setSearchOpen(true)}>
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            )}
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Favorites</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Shopping list</span>
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                3
              </span>
            </Button>

            {user ? (
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-colors">
                      <Avatar className="h-full w-full">
                        <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                        <AvatarFallback className="bg-primary/10 text-primary font-bold">
                          {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-2 rounded-xl p-2 shadow-xl border-border/50 animate-in fade-in slide-in-from-top-2" align="end">
                    <DropdownMenuLabel className="font-serif text-base px-2 py-1.5">{user.displayName || "My Account"}</DropdownMenuLabel>
                    <DropdownMenuSeparator className="my-1 bg-border/50" />
                    <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer focus:bg-secondary py-2" asChild>
                      <Link href="/profile" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        <span>Profile & Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer focus:bg-secondary py-2">
                      <Heart className="h-4 w-4 text-primary" />
                      <span>My Collections</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="my-1 bg-border/50" />

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <DropdownMenuItem
                          className="rounded-lg gap-2 cursor-pointer focus:bg-destructive focus:text-white py-2 text-destructive font-medium group transition-colors"
                          onSelect={(e) => e.preventDefault()}
                        >
                          <Trash className="h-4 w-4 group-focus:text-white" />
                          <span>Delete Account</span>
                        </DropdownMenuItem>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="rounded-2xl border-border/50 shadow-2xl">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="font-serif text-2xl">Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription className="text-muted-foreground text-base">
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="rounded-xl border-border/60">Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={handleDeleteAccount}
                            className="bg-destructive text-white hover:bg-destructive/90 rounded-xl px-6"
                            disabled={isDeleting}
                          >
                            {isDeleting ? "Deleting..." : "Delete Account"}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <DropdownMenuItem className="rounded-lg gap-2 cursor-pointer focus:bg-secondary py-2" onClick={() => logout()}>
                      <LogOut className="h-4 w-4 text-muted-foreground" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Button
                variant="default"
                className="hidden md:flex h-10 px-6 rounded-full font-semibold shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                onClick={() => router.push("/login")}
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 flex flex-col gap-2">
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search recipes..." className="pl-10" />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border mt-2">
              {!user && (
                <Button variant="default" className="flex-1 rounded-lg" onClick={() => {
                  setMobileMenuOpen(false);
                  router.push("/login");
                }}>
                  Sign In
                </Button>
              )}
              <Button variant="outline" size="sm" className="flex-1 gap-2">
                <Heart className="h-4 w-4" /> Favorites
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
