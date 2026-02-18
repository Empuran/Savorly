import { ChefHat } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  Explore: ["Recipes", "Meal Plans", "Seasonal", "Collections", "Community"],
  Learn: ["Cooking Tips", "Techniques", "Ingredients", "Kitchen Tools", "Blog"],
  Company: ["About", "Careers", "Press", "Contact", "Privacy"],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <ChefHat className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-serif text-background">Savorly</span>
            </div>
            <p className="text-background/60 leading-relaxed max-w-sm mb-6">
              Your daily cooking companion. Discover recipes, plan meals, and bring joy 
              to your kitchen every single day.
            </p>
            {/* Newsletter */}
            <div className="flex gap-2 max-w-sm">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-primary"
              />
              <Button className="shrink-0 rounded-lg">Subscribe</Button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            2026 Savorly. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-background/40 hover:text-background/60 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
