"use client"

import { useState } from "react"
import { Salad, Beef, Fish, Egg, CakeSlice, Soup, Sandwich, Coffee } from "lucide-react"

const categories = [
  { name: "Breakfast", icon: Coffee, count: 124 },
  { name: "Salads", icon: Salad, count: 89 },
  { name: "Meat", icon: Beef, count: 210 },
  { name: "Seafood", icon: Fish, count: 95 },
  { name: "Eggs", icon: Egg, count: 67 },
  { name: "Desserts", icon: CakeSlice, count: 156 },
  { name: "Soups", icon: Soup, count: 78 },
  { name: "Sandwiches", icon: Sandwich, count: 93 },
]

export function CategoriesSection() {
  const [active, setActive] = useState("Breakfast")

  return (
    <section className="py-16 md:py-20" id="recipes">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
              Browse by Category
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Find exactly what you want for your next meal.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all categories
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = active === cat.name
            return (
              <button
                key={cat.name}
                onClick={() => setActive(cat.name)}
                className={`flex flex-col items-center gap-3 p-5 rounded-xl border transition-all duration-200 cursor-pointer group ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card text-foreground border-border hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                <Icon
                  className={`h-6 w-6 transition-colors ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                  }`}
                />
                <div className="text-center">
                  <span className={`text-sm font-semibold block ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                    {cat.name}
                  </span>
                  <span className={`text-xs mt-0.5 block ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {cat.count} recipes
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
