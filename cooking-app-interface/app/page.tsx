"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { RecipesSection } from "@/components/recipes-section"
import { FeaturedRecipe } from "@/components/featured-recipe"
import { MealPlannerSection } from "@/components/meal-planner-section"
import { Footer } from "@/components/footer"
import { useRecipes } from "@/hooks/useFirestore"
import { seedDatabase } from "@/lib/seed"

export default function Home() {
  const { recipes, loading } = useRecipes()

  useEffect(() => {
    // Only seed if not loading and recipes list is empty
    if (!loading && recipes.length === 0) {
      console.log("No recipes found in Firestore. Seeding database...")
      seedDatabase()
    }
  }, [loading, recipes])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <RecipesSection />
        <FeaturedRecipe />
        <MealPlannerSection />
      </main>
      <Footer />
    </div>
  )
}
