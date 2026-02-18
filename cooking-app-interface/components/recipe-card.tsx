"use client"

import { useState } from "react"
import { Clock, Users, Heart, Bookmark, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

import { Ingredient } from "@/lib/data"

export interface RecipeData {
  id: string
  title: string
  description: string
  image: string
  time: string
  servings: number
  difficulty: "Easy" | "Medium" | "Hard"
  rating: number
  calories: number
  tags: string[]
  author: string
  category: string
  ingredients: Ingredient[] // Added
  steps: string[] // Added
}

import Link from "next/link"

// ... (imports remain)

export function RecipeCard({ recipe }: { recipe: RecipeData }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  return (
    <article className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link href={`/recipe/${recipe.id}`} className="block w-full h-full">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex gap-1.5 z-10">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 ${liked
              ? "bg-destructive text-primary-foreground"
              : "bg-background/70 text-foreground hover:bg-background/90"
              }`}
            aria-label={liked ? "Unlike recipe" : "Like recipe"}
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
          </button>
          <button
            onClick={() => setSaved(!saved)}
            className={`flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 ${saved
              ? "bg-primary text-primary-foreground"
              : "bg-background/70 text-foreground hover:bg-background/90"
              }`}
            aria-label={saved ? "Unsave recipe" : "Save recipe"}
          >
            <Bookmark className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge
            variant="secondary"
            className={`text-xs backdrop-blur-md border-0 ${recipe.difficulty === "Easy"
              ? "bg-accent/90 text-accent-foreground"
              : recipe.difficulty === "Medium"
                ? "bg-chart-4/90 text-foreground"
                : "bg-destructive/90 text-primary-foreground"
              }`}
          >
            {recipe.difficulty}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {recipe.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[11px] font-medium uppercase tracking-wider text-primary">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-serif text-lg font-bold text-card-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {recipe.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${i < Math.floor(recipe.rating)
                ? "text-chart-4 fill-chart-4"
                : "text-border"
                }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{recipe.rating}</span>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="flex items-center gap-1 text-xs">
              <Clock className="h-3.5 w-3.5" />
              {recipe.time}
            </span>
            <span className="flex items-center gap-1 text-xs">
              <Users className="h-3.5 w-3.5" />
              {recipe.servings} servings
            </span>
          </div>
          <span className="text-xs font-medium text-primary">{recipe.calories} cal</span>
        </div>
      </div>
    </article>
  )
}
