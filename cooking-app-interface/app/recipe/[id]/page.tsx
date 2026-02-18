"use client"

import { use, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { recipes } from "@/lib/data"
import { Clock, Users, Flame, Star, ChevronLeft, Check, Share2, Heart, Printer } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function RecipePage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params using React.use()
    const { id } = use(params)
    const recipe = recipes.find((r) => r.id === id)
    const [activeStep, setActiveStep] = useState(0)
    const [checkedIngredients, setCheckedIngredients] = useState<string[]>([])

    if (!recipe) {
        notFound()
    }

    const toggleIngredient = (idx: string) => {
        setCheckedIngredients(prev =>
            prev.includes(idx)
                ? prev.filter(i => i !== idx)
                : [...prev, idx]
        )
    }

    return (
        <article className="min-h-screen bg-background pb-20">
            {/* Sticky Header for Mobile/Easy Nav */}
            <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border p-4 flex items-center justify-between lg:hidden">
                <Link href="/" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                    <ChevronLeft className="h-5 w-5" />
                    <span className="font-medium">Back</span>
                </Link>
                <span className="font-serif font-bold text-lg truncate max-w-[200px]">{recipe.title}</span>
                <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                </Button>
            </div>

            {/* Hero Image Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 max-w-7xl mx-auto">
                    <div className="animate-in-fade-slide">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                {recipe.category}
                            </Badge>
                            <Badge variant="outline" className="bg-background/50 backdrop-blur-sm text-foreground border-white/20">
                                {recipe.difficulty}
                            </Badge>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground text-balance mb-4 drop-shadow-sm">
                            {recipe.title}
                        </h1>

                        <div className="flex items-center gap-2 text-foreground/90 mb-6">
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < Math.floor(recipe.rating) ? "text-primary fill-primary" : "text-muted-foreground"}`}
                                    />
                                ))}
                            </div>
                            <span className="font-medium ml-2">{recipe.rating} ({Math.floor(Math.random() * 200) + 50} reviews)</span>
                        </div>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            {recipe.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-20">

                {/* Left Column: Stats, Ingredients, Instructions */}
                <div>
                    {/* Quick Stats Bar */}
                    <div className="flex flex-wrap gap-8 py-6 border-y border-border mb-12 animate-in-fade-slide delay-100">
                        <div className="flex items-center gap-3">
                            <Clock className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Total Time</p>
                                <p className="font-medium text-lg">{recipe.time}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Users className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Servings</p>
                                <p className="font-medium text-lg">{recipe.servings} People</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Flame className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Calories</p>
                                <p className="font-medium text-lg">{recipe.calories} kcal</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16 animate-in-fade-slide delay-200">
                        {/* Ingredients */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-serif font-bold">Ingredients</h2>
                                {/* Scale buttons could go here */}
                            </div>
                            <ul className="space-y-4">
                                {recipe.ingredients.map((ing, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
                                        onClick={() => toggleIngredient(`${i}`)}
                                    >
                                        <div className={`mt-0.5 h-5 w-5 rounded-full border border-primary flex items-center justify-center transition-colors ${checkedIngredients.includes(`${i}`) ? "bg-primary text-primary-foreground" : "text-transparent"}`}>
                                            <Check className="h-3.5 w-3.5" />
                                        </div>
                                        <div className={checkedIngredients.includes(`${i}`) ? "opacity-50 line-through transition-opacity" : ""}>
                                            <span className="font-bold text-foreground">{ing.amount}</span>{" "}
                                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">{ing.item}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Author / Notes placeholder */}
                        <div className="bg-secondary/30 rounded-2xl p-6 h-fit">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                    {recipe.author[0]}
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Recipe by</p>
                                    <p className="font-bold text-lg">{recipe.author}</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground italic text-sm leading-relaxed">
                                "Make sure to use the freshest ingredients you can find for this recipe. It really makes a difference!"
                            </p>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="animate-in-fade-slide delay-300">
                        <h2 className="text-2xl font-serif font-bold mb-8">Instructions</h2>
                        <div className="space-y-10">
                            {recipe.steps.map((step, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex-shrink-0">
                                        <span className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold border-2 transition-colors ${activeStep >= i ? "bg-primary border-primary text-primary-foreground" : "border-border text-muted-foreground"}`}>
                                            {i + 1}
                                        </span>
                                        {i < recipe.steps.length - 1 && (
                                            <div className="w-0.5 h-full bg-border mx-auto my-2 group-hover:bg-primary/20 transition-colors" />
                                        )}
                                    </div>
                                    <div className="pt-2 pb-8">
                                        <p
                                            className="text-lg text-foreground/90 leading-relaxed cursor-pointer hover:text-primary transition-colors"
                                            onClick={() => setActiveStep(i)}
                                        >
                                            {step}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar (Desktop) */}
                <div className="hidden lg:block space-y-8 animate-in-fade-slide delay-300">
                    <div className="sticky top-24">
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
                            <h3 className="font-serif font-bold text-xl mb-4">Actions</h3>
                            <Button className="w-full gap-2 rounded-xl text-base" size="lg">
                                <Printer className="h-4 w-4" /> Print Recipe
                            </Button>
                            <Button variant="outline" className="w-full gap-2 rounded-xl text-base" size="lg">
                                <Heart className="h-4 w-4" /> Save to Favorites
                            </Button>
                            <Button variant="ghost" className="w-full gap-2 rounded-xl">
                                <Share2 className="h-4 w-4" /> Share
                            </Button>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-serif font-bold text-xl mb-4">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {recipe.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="px-3 py-1 cursor-pointer hover:bg-secondary-foreground/10 transition-colors">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
