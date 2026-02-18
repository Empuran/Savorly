"use client"

import { useState } from "react"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import { recipes } from "@/lib/data"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const getRecipeImage = (id: string) => {
  const recipe = recipes.find(r => r.id === id)
  // Fallback to first recipe image or a valid placeholder if not found
  return recipe ? recipe.image : "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80"
}

const mealPlan: Record<string, { meal: string; type: string; image: string; calories: number }[]> = {
  Mon: [
    { meal: "Green Smoothie Bowl", type: "Breakfast", image: getRecipeImage("4"), calories: 290 },
    { meal: "Salmon Poke Bowl", type: "Lunch", image: getRecipeImage("2"), calories: 380 },
    { meal: "Herb-Roasted Chicken", type: "Dinner", image: getRecipeImage("1"), calories: 420 },
  ],
  Tue: [
    { meal: "Sourdough Toast", type: "Breakfast", image: getRecipeImage("3"), calories: 280 },
    { meal: "Caprese Salad", type: "Lunch", image: getRecipeImage("6"), calories: 220 },
    { meal: "Shrimp Tacos", type: "Dinner", image: getRecipeImage("5"), calories: 350 },
  ],
  Wed: [
    { meal: "Green Smoothie Bowl", type: "Breakfast", image: getRecipeImage("4"), calories: 290 },
    { meal: "Shrimp Tacos", type: "Lunch", image: getRecipeImage("5"), calories: 350 },
    { meal: "Salmon Poke Bowl", type: "Dinner", image: getRecipeImage("2"), calories: 380 },
  ],
}

export function MealPlannerSection() {
  const [selectedDay, setSelectedDay] = useState("Mon")
  const meals = mealPlan[selectedDay] || mealPlan["Mon"]
  const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0)

  return (
    <section className="py-16 md:py-20" id="meal-plan">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
              Weekly Meal Plan
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Plan your week ahead for stress-free cooking.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous week</span>
            </Button>
            <span className="text-sm font-medium text-foreground px-3">Feb 17 - 23</span>
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next week</span>
            </Button>
          </div>
        </div>

        {/* Day Selector */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {days.map((day) => {
            const isActive = selectedDay === day
            const hasMeals = day in mealPlan
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex flex-col items-center px-5 py-3 rounded-xl border transition-all duration-200 min-w-[72px] ${isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : hasMeals
                    ? "bg-card text-foreground border-border hover:border-primary/30"
                    : "bg-muted/50 text-muted-foreground border-border"
                  }`}
              >
                <span className={`text-xs font-medium ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {day}
                </span>
                <span className={`text-lg font-bold ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                  {17 + days.indexOf(day)}
                </span>
                {hasMeals && !isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1" />
                )}
              </button>
            )
          })}
        </div>

        {/* Meals for Selected Day */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {meals.map((meal, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-card rounded-xl border border-border p-4 hover:shadow-sm transition-shadow group"
            >
              <div className="relative h-16 w-16 rounded-lg overflow-hidden shrink-0">
                <Image src={meal.image} alt={meal.meal} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {meal.type}
                </span>
                <h4 className="text-sm font-bold text-card-foreground truncate mt-0.5">
                  {meal.meal}
                </h4>
                <span className="text-xs text-muted-foreground">{meal.calories} cal</span>
              </div>
            </div>
          ))}

          {/* Add Meal Placeholder */}
          {meals.length < 4 && (
            <button className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-xl p-4 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors min-h-[88px]">
              <Plus className="h-4 w-4" />
              <span className="text-sm font-medium">Add Snack</span>
            </button>
          )}
        </div>

        {/* Daily Summary */}
        <div className="mt-6 flex flex-wrap items-center gap-6 p-4 bg-secondary/50 rounded-xl">
          <div>
            <span className="text-xs text-muted-foreground">Total Calories</span>
            <p className="text-lg font-bold text-foreground">{totalCalories}</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <span className="text-xs text-muted-foreground">Meals Planned</span>
            <p className="text-lg font-bold text-foreground">{meals.length}/4</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <span className="text-xs text-muted-foreground">Prep Time</span>
            <p className="text-lg font-bold text-foreground">~85 min</p>
          </div>
          <div className="ml-auto">
            <Button className="rounded-xl" size="sm">
              Generate Shopping List
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
