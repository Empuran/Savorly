"use client"

import { useState } from "react"
import { RecipeCard } from "@/components/recipe-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { recipes } from "@/lib/data"

export function RecipesSection() {
  const [activeTab, setActiveTab] = useState("trending")
  const [visibleCount, setVisibleCount] = useState(6)

  // Simple filtering logic for demo purposes
  const filteredRecipes = recipes.filter(recipe => {
    if (activeTab === "trending") return recipe.rating >= 4.7
    if (activeTab === "quick") return parseInt(recipe.time) <= 30
    // "newest" just shows all in original order for now, effectively
    return true
  })

  return (
    <section className="py-16 md:py-24 bg-secondary/30" id="recipes-section">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="animate-in-fade-slide">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground text-balance">
              Popular Recipes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Tried, tested, and loved by our community. Discover your next favorite meal.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-in-fade-slide delay-100">
            <TabsList className="bg-background/50 backdrop-blur-sm p-1 rounded-full border border-border/50">
              <TabsTrigger value="trending" className="rounded-full px-6">Trending</TabsTrigger>
              <TabsTrigger value="newest" className="rounded-full px-6">Newest</TabsTrigger>
              <TabsTrigger value="quick" className="rounded-full px-6">Quick Meals</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* We need to use a client side wrapper for motion if framer-motion is not installed, 
            but the user didn't ask for it specifically. I'll check package.json if I haven't. 
            Wait, I saw package.json, framer-motion WAS NOT there. 
            I should NOT use framer-motion if not installed. 
            I will use standard CSS classes I just added. 
        */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.slice(0, visibleCount).map((recipe, index) => (
            <div
              key={recipe.id}
              className="animate-in-fade-slide"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>

        {visibleCount < filteredRecipes.length && (
          <div className="mt-16 text-center animate-in-fade-slide delay-300">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors text-base"
              onClick={() => setVisibleCount(prev => prev + 6)}
            >
              Load More Recipes
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
