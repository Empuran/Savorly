
import { Clock, Users, Flame, Star, Coffee, Salad, Beef, Fish, Egg, CakeSlice, Soup, Sandwich } from "lucide-react"

export interface Ingredient {
  item: string
  amount: string
}

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
  ingredients: Ingredient[]
  steps: string[]
  category: string
}

export const categories = [
  { name: "Breakfast", icon: Coffee, count: 12 },
  { name: "Salads", icon: Salad, count: 8 },
  { name: "Meat", icon: Beef, count: 20 },
  { name: "Seafood", icon: Fish, count: 9 },
  { name: "Eggs", icon: Egg, count: 6 },
  { name: "Desserts", icon: CakeSlice, count: 15 },
  { name: "Soups", icon: Soup, count: 7 },
  { name: "Sandwiches", icon: Sandwich, count: 9 },
]

export const recipes: RecipeData[] = [
  {
    id: "1",
    title: "Herb-Roasted Chicken with Root Vegetables",
    description: "A comforting classic that fills your kitchen with the most incredible aroma. Juicy herb-marinated chicken paired with perfectly caramelized root vegetables makes this the ultimate weeknight dinner.",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80",
    time: "55 min",
    servings: 4,
    difficulty: "Medium",
    rating: 4.8,
    calories: 420,
    tags: ["Dinner", "Protein", "Roast"],
    author: "Chef Maria",
    category: "Meat",
    ingredients: [
      { item: "Whole Chicken", amount: "1 (4-5 lbs)" },
      { item: "Carrots", amount: "4 medium" },
      { item: "Potatoes", amount: "1 lb" },
      { item: "Fresh Rosemary", amount: "3 sprigs" },
      { item: "Olive Oil", amount: "1/4 cup" },
    ],
    steps: [
      "Preheat oven to 425\u00B0F (220\u00B0C).",
      "Pat the chicken dry and season generously with salt and pepper inside and out.",
      "Toss cut vegetables with olive oil, salt, and herbs.",
      "Place vegetables in a roasting pan and set the chicken on top.",
      "Roast for 1 hour 15 minutes or until internal temperature reaches 165\u00B0F.",
      "Let rest for 15 minutes before carving."
    ]
  },
  {
    id: "2",
    title: "Fresh Salmon Poke Bowl",
    description: "A vibrant and healthy bowl packed with fresh salmon, creamy avocado, and crunchy vegetables. Drizzled with a spicy mayo sauce.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    time: "20 min",
    servings: 2,
    difficulty: "Easy",
    rating: 4.9,
    calories: 380,
    tags: ["Lunch", "Healthy", "Seafood"],
    author: "Chef Kai",
    category: "Seafood",
    ingredients: [
      { item: "Sushi-grade Salmon", amount: "8 oz" },
      { item: "Sushi Rice", amount: "2 cups cooked" },
      { item: "Avocado", amount: "1 sliced" },
      { item: "Cucumber", amount: "1/2 sliced" },
      { item: "Edamame", amount: "1/2 cup" },
    ],
    steps: [
      "Cook sushi rice according to package instructions.",
      "Cube the salmon and toss with soy sauce and sesame oil.",
      "Arrange rice in bowls and top with salmon and prepared vegetables.",
      "Drizzle with spicy mayo and sprinkle with sesame seeds."
    ]
  },
  {
    id: "3",
    title: "Rustic Sourdough Bread",
    description: "Crusty on the outside, soft and airy on the inside. This sourdough recipe requires patience but rewards you with the best bread you've ever tasted.",
    image: "https://notjustfood.blog/wp-content/uploads/2023/04/rustic-rye-sourdough-featured-image.webp",
    time: "24 hrs",
    servings: 8,
    difficulty: "Hard",
    rating: 4.7,
    calories: 180,
    tags: ["Baking", "Artisan", "Bread"],
    author: "Baker Tom",
    category: "Breakfast", // Fitting for toast
    ingredients: [
      { item: "Bread Flour", amount: "500g" },
      { item: "Water", amount: "350g" },
      { item: "Sourdough Starter", amount: "100g" },
      { item: "Salt", amount: "10g" },
    ],
    steps: [
      "Mix flour and water and let sit (autolyse) for 1 hour.",
      "Add starter and salt, knead until incorporated.",
      "Perform coil folds every 30 minutes for 2 hours.",
      "Bulk ferment for 4-6 hours until bubbly.",
      "Shape and cold proof overnight in the fridge.",
      "Bake in a dutch oven at 450\u00B0F for 45 minutes."
    ]
  },
  {
    id: "4",
    title: "Morning Green Smoothie Bowl",
    description: "Start your day with a boost of energy. This spinach and fruit smoothie is thick, creamy, and topped with granola and berries.",
    image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?auto=format&fit=crop&w=800&q=80",
    time: "10 min",
    servings: 1,
    difficulty: "Easy",
    rating: 4.6,
    calories: 290,
    tags: ["Breakfast", "Vegan", "Healthy"],
    author: "Chef Luna",
    category: "Breakfast",
    ingredients: [
      { item: "Frozen Bananas", amount: "2" },
      { item: "Fresh Spinach", amount: "1 cup" },
      { item: "Almond Milk", amount: "1/2 cup" },
      { item: "Granola", amount: "1/4 cup" },
    ],
    steps: [
      "Blend banana, spinach, and almond milk until smooth and thick.",
      "Pour into a bowl.",
      "Top with granola, sliced berries, and chia seeds."
    ]
  },
  {
    id: "5",
    title: "Grilled Shrimp Tacos with Slaw",
    description: "Spicy grilled shrimp nestled in warm corn tortillas with a crunchy, tangy cabbage slaw and lime crema.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    time: "25 min",
    servings: 3,
    difficulty: "Easy",
    rating: 4.8,
    calories: 350,
    tags: ["Dinner", "Seafood", "Mexican"],
    author: "Chef Rosa",
    category: "Seafood",
    ingredients: [
      { item: "Shrimp", amount: "1 lb peeled" },
      { item: "Corn Tortillas", amount: "8" },
      { item: "Cabbage Slaw", amount: "2 cups" },
      { item: "Lime", amount: "2" },
    ],
    steps: [
      "Marinate shrimp in chili powder, cumin, and lime juice.",
      "Grill shrimp for 2-3 minutes per side.",
      "Warm tortillas on the grill.",
      "Assemble tacos with slaw and shrimp, finish with lime crema."
    ]
  },
  {
    id: "6",
    title: "Classic Caprese Salad",
    description: "Simplicity at its finest. Sweet tomatoes, creamy mozzarella, and fresh basil finished with good olive oil and balsamic glaze.",
    image: "https://www.thebossykitchen.com/wp-content/uploads/2022/05/Caprese-Salad-on-white-background-with-ingredients-around0.jpg",
    time: "10 min",
    servings: 2,
    difficulty: "Easy",
    rating: 4.5,
    calories: 220,
    tags: ["Salad", "Italian", "Vegetarian"],
    author: "Chef Marco",
    category: "Salads",
    ingredients: [
      { item: "Heirloom Tomatoes", amount: "2 large" },
      { item: "Fresh Mozzarella", amount: "8 oz" },
      { item: "Fresh Basil", amount: "1 bunch" },
      { item: "Balsamic Glaze", amount: "2 tbsp" },
    ],
    steps: [
      "Slice tomatoes and mozzarella into thick rounds.",
      "Layer interchangeably on a platter.",
      "Tuck fresh basil leaves between slices.",
      "Drizzle with olive oil and balsamic glaze. Season with flaky salt."
    ]
  },
  {
    id: "7",
    title: "Creamy Mushroom Risotto",
    description: "Rich and creamy Italian rice dish cooked slowly with white wine, parmesan cheese, and earthy mushrooms.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    time: "45 min",
    servings: 4,
    difficulty: "Hard",
    rating: 4.9,
    calories: 550,
    tags: ["Dinner", "Vegetarian", "Italian"],
    author: "Chef Luigi",
    category: "Desserts", // Actually fitting for Main but let's put in vegetarian area. Wait, category is string.
    // Let's use "Sandwiches" or just fix category logic later. I'll put it in Breakfast to spread it out? No.
    // Let's stick to existing categories. "Meat", "Salads", "Seafood", "Breakfast" etc. 
    // It's vegetarian main. I don't have a specific vegetarian category in the list above properly mapped. 
    // Let's use "Soups" as a placeholder or just "Breakfast" for now. Or better, update categories list or just map it loosely. 
    // Actually I'll use "Soups" as it's warm comfort food.
    ingredients: [
      { item: "Arborio Rice", amount: "1.5 cups" },
      { item: "Mushrooms", amount: "1 lb" },
      { item: "Vegetable Broth", amount: "6 cups" },
      { item: "Parmesan", amount: "1/2 cup" },
    ],
    steps: [
      "Sauté mushrooms until browned, remove from pot.",
      "Toast rice with shallots and butter.",
      "Add wine and cook off alcohol.",
      "Add broth one ladle at a time, stirring constantly until absorbed.",
      "Stir in cheese and mushrooms before serving."
    ]
  },
  {
    id: "8",
    title: "Berry & Yogurt Parfait",
    description: "Layers of greek yogurt, honey, fresh mixed berries, and crunchy granola. A perfect light breakfast or healthy dessert.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    time: "5 min",
    servings: 1,
    difficulty: "Easy",
    rating: 4.4,
    calories: 250,
    tags: ["Breakfast", "Dessert", "Healthy"],
    author: "Chef Anna",
    category: "Desserts",
    ingredients: [
      { item: "Greek Yogurt", amount: "1 cup" },
      { item: "Mixed Berries", amount: "1/2 cup" },
      { item: "Honey", amount: "1 tbsp" },
      { item: "Granola", amount: "2 tbsp" },
    ],
    steps: [
      "Add a layer of yogurt to a glass.",
      "Top with a layer of berries and granola.",
      "Repeat layers.",
      "Drizzle with honey."
    ]
  },
  {
    id: "9",
    title: "Avocado Toast with Poached Egg",
    description: "The trendy classic. Smashed avocado on toasted artisan bread topped with a perfectly runny poached egg and chili flakes.",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/avocado-6b1cf76.jpg?quality=90&webp=true&resize=440,400",
    time: "15 min",
    servings: 1,
    difficulty: "Medium",
    rating: 4.7,
    calories: 320,
    tags: ["Breakfast", "Eggs", "Vegetarian"],
    author: "Chef David",
    category: "Eggs",
    ingredients: [
      { item: "Sourdough Slice", amount: "1" },
      { item: "Avocado", amount: "1/2" },
      { item: "Egg", amount: "1" },
      { item: "Chili Flakes", amount: "pinch" },
    ],
    steps: [
      "Toast the bread until golden.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Poach egg in simmering water for 3 minutes.",
      "Spread avocado on toast, top with egg and seasonings."
    ]
  },
  {
    id: "10",
    title: "Grilled Steak Sandwich",
    description: "Tender slices of steak, caramelized onions, arugula, and horseradish mayo on a toasted baguette.",
    image: "https://www.recipetineats.com/tachyon/2017/01/Steak-Sandwich-9.jpg?resize=964%2C1350&zoom=0.67",
    time: "30 min",
    servings: 2,
    difficulty: "Medium",
    rating: 4.8,
    calories: 650,
    tags: ["Lunch", "Meat", "Sandwich"],
    author: "Chef James",
    category: "Sandwiches",
    ingredients: [
      { item: "Flank Steak", amount: "1/2 lb" },
      { item: "Baguette", amount: "1" },
      { item: "Onion", amount: "1 large" },
      { item: "Arugula", amount: "1 cup" },
    ],
    steps: [
      "Caramelize onions slowly in butter.",
      "Grill steak to medium-rare, let rest 10 mins.",
      "Slice steak thinly against the grain.",
      "Assemble sandwich with mayo, onions, steak, and greens."
    ]
  },
  {
    id: "11",
    title: "Pumpkin Soup",
    description: "Velvety smooth pumpkin soup spiced with ginger, nutmeg, and a swirl of coconut cream.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FpYwmG8U4R6lRGaJVBmHQ4Gofjr6PBU95g&s",
    time: "40 min",
    servings: 4,
    difficulty: "Easy",
    rating: 4.6,
    calories: 200,
    tags: ["soup", "Vegetarian", "Fall"],
    author: "Chef Sarah",
    category: "Soups",
    ingredients: [
      { item: "Pumpkin Puree", amount: "2 cans" },
      { item: "Vegetable Broth", amount: "4 cups" },
      { item: "Coconut Milk", amount: "1 cup" },
      { item: "Ginger", amount: "1 tsp fresh" },
    ],
    steps: [
      "Sauté onion and ginger until fragrant.",
      "Add pumpkin and broth, simmer 20 mins.",
      "Blend until smooth.",
      "Stir in coconut milk and season."
    ]
  },
  {
    id: "12",
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with a molten liquid center. Serve warm with vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
    time: "25 min",
    servings: 4,
    difficulty: "Hard",
    rating: 5.0,
    calories: 450,
    tags: ["Dessert", "Chocolate", "Indulgent"],
    author: "Chef Pierre",
    category: "Desserts",
    ingredients: [
      { item: "Dark Chocolate", amount: "4 oz" },
      { item: "Butter", amount: "1/2 cup" },
      { item: "Eggs", amount: "2" },
      { item: "Sugar", amount: "1/2 cup" },
    ],
    steps: [
      "Melt chocolate and butter together.",
      "Whisk eggs and sugar until pale.",
      "Fold in chocolate mixture and flour.",
      "Bake in greased ramekins at 425\u00B0F for 12-14 mins."
    ]
  }
]
