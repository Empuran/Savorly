"use client"

import { useState } from "react"
import { Coffee, Salad, Beef, Fish, Egg, CakeSlice, Soup, Sandwich, LucideIcon } from "lucide-react"
import { useCategories } from "@/hooks/useFirestore"
import { Card, CardContent } from "@/components/ui/card"
import { categories as staticCategories } from "@/lib/data"

const iconMap: Record<string, LucideIcon> = {
  "Breakfast": Coffee,
  "Salads": Salad,
  "Meat": Beef,
  "Seafood": Fish,
  "Eggs": Egg,
  "Desserts": CakeSlice,
  "Soups": Soup,
  "Sandwiches": Sandwich,
}

export function CategoriesSection() {
  const { categories: firestoreCategories, loading } = useCategories()
  const [active, setActive] = useState("Breakfast")

  // Fallback to static data if firestore is loading or empty
  const categories = !loading && firestoreCategories.length > 0
    ? firestoreCategories
    : staticCategories

  return (
    <section className="py-16 bg-background" id="categories-section">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Browse by Category
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find exactly what you want for your next meal.
            </p>
          </div>
          <a href="#" className="text-sm font-medium text-primary hover:underline">
            View all categories
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category: any) => {
            const Icon = iconMap[category.name] || Coffee
            const isActive = active === category.name

            return (
              <button
                key={category.name}
                onClick={() => setActive(category.name)}
                className="group focus:outline-none"
              >
                <Card className={`h-full transition-all duration-300 border-border/50 overflow-hidden ${isActive
                    ? "bg-primary border-primary shadow-lg shadow-primary/20 scale-105"
                    : "hover:border-primary/30 hover:shadow-md bg-card"
                  }`}>
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className={`p-3 rounded-xl mb-3 transition-colors ${isActive ? "bg-white/20" : "bg-primary/5 group-hover:bg-primary/10"
                      }`}>
                      <Icon className={`h-6 w-6 ${isActive ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className={`block font-semibold text-sm mb-1 ${isActive ? "text-white" : "text-foreground"
                      }`}>
                      {category.name}
                    </span>
                    <span className={`text-[10px] uppercase tracking-wider ${isActive ? "text-white/70" : "text-muted-foreground"
                      }`}>
                      {category.count} recipes
                    </span>
                  </CardContent>
                </Card>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
