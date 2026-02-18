"use client"

import { useState } from "react"
import { Search, Clock, Flame, ChefHat } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const quickTags = ["Quick & Easy", "Under 30 min", "Vegetarian", "One Pot", "Meal Prep"]

export function HeroSection() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <section className="relative overflow-hidden h-[85vh] min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=2000&q=80"
          alt="Beautifully plated pasta dish"
          fill
          className="object-cover transition-transform duration-[20s] hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 w-full">
        <div className="max-w-3xl animate-in-fade-slide">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-md px-4 py-1.5 text-sm font-medium">
            #1 Cooking Community
          </Badge>

          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1] text-balance shadow-sm">
            Cook something <br />
            <span className="text-primary-foreground">wonderful today</span>
          </h1>

          <p className="mt-6 text-xl text-gray-200 leading-relaxed max-w-xl delay-100 animate-in-fade-slide opacity-0 fill-mode-forwards">
            Discover recipes that fit your lifestyle, plan your meals, and bring joy to your kitchen every single day.
          </p>

          {/* Search Bar */}
          <div className="mt-10 flex flex-col gap-6 delay-200 animate-in-fade-slide opacity-0 fill-mode-forwards">
            <div className="relative max-w-xl group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="search"
                  placeholder="What are you craving today?"
                  className="pl-14 h-16 text-lg bg-white/95 backdrop-blur-md border-0 shadow-2xl rounded-2xl focus-visible:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <span className="text-sm font-medium text-white/80 mr-2 py-1.5">Popular:</span>
              {quickTags.map((tag, i) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/10 text-white border-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/20 hover:scale-105 transition-all px-4 py-1.5 text-sm"
                  style={{ animationDelay: `${300 + (i * 50)}ms` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8 delay-300 animate-in-fade-slide opacity-0 fill-mode-forwards border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm">
                <ChefHat className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">2,500+</span>
                <span className="text-xs text-white/60 uppercase tracking-widest">Recipes</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm">
                <Clock className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">15min</span>
                <span className="text-xs text-white/60 uppercase tracking-widest">Avg Prep</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm">
                <Flame className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Active</span>
                <span className="text-xs text-white/60 uppercase tracking-widest">Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
