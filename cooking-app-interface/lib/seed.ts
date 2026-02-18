import { db } from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { recipes, categories } from "./data";

export async function seedDatabase() {
    try {
        console.log("Starting database seed...");

        // Seed Categories
        for (const category of categories) {
            try {
                const categoryToStore = {
                    name: category.name,
                    count: category.count
                };
                await setDoc(doc(db, "categories", category.name), categoryToStore);
                console.log(`Seeded category: ${category.name}`);
            } catch (e) {
                console.error(`Failed to seed category ${category.name}:`, e);
            }
        }

        // Seed Recipes
        for (const recipe of recipes) {
            try {
                await setDoc(doc(db, "recipes", recipe.id), recipe);
                console.log(`Seeded recipe: ${recipe.title}`);
            } catch (e) {
                console.error(`Failed to seed recipe ${recipe.title}:`, e);
            }
        }

        console.log("Database seeding process completed!");
    } catch (error) {
        console.error("Critical error during seeding:", error);
    }
}
