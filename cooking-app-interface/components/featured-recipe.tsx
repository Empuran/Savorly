"use client"

import { Clock, Users, Flame, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { recipes } from "@/lib/data"

const steps = [
  "Marinate chicken with herbs and olive oil",
  "Prep root vegetables and toss with seasoning",
  "Roast at 425\u00B0F for 45 minutes",
  "Rest for 10 minutes before serving",
]

export function FeaturedRecipe() {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            Recipe of the Day
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            Herb-Roasted Chicken with Root Vegetables
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={recipes[0].image}
              alt={recipes[0].title}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            {/* Stats Row */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">55 min</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">4 servings</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
                <Flame className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">420 cal</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-2 bg-secondary rounded-lg">
                <Star className="h-4 w-4 text-chart-4 fill-chart-4" />
                <span className="text-sm font-medium text-secondary-foreground">4.8</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              A comforting classic that fills your kitchen with the most incredible aroma.
              Juicy herb-marinated chicken paired with perfectly caramelized root vegetables
              makes this the ultimate weeknight dinner.
            </p>

            {/* Quick Steps */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                Quick Steps
              </h3>
              <div className="flex flex-col gap-3">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rounded-xl gap-2">
                Start Cooking
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl">
                Save to Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
