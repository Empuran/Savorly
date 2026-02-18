"use client"

import { useState } from "react"
import { Search, Menu, X, Heart, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const navLinks = [
  { label: "Recipes", href: "#recipes-section" },
  { label: "Meal Plan", href: "#meal-plan" },
  { label: "Pantry", href: "#pantry" },
  { label: "Community", href: "#community" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative h-10 w-32 overflow-hidden">
              <Image
                src="/logo.svg"
                alt="Savorly Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

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
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <User className="h-4 w-4" />
              <span className="sr-only">Account</span>
            </Button>
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
              <Button variant="outline" size="sm" className="flex-1 gap-2">
                <Heart className="h-4 w-4" /> Favorites
              </Button>
              <Button variant="outline" size="sm" className="flex-1 gap-2">
                <ShoppingCart className="h-4 w-4" /> Cart (3)
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
