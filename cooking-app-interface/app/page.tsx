import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { RecipesSection } from "@/components/recipes-section"
import { FeaturedRecipe } from "@/components/featured-recipe"
import { MealPlannerSection } from "@/components/meal-planner-section"
import { Footer } from "@/components/footer"

export default function Home() {
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
