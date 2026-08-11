import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"

/** Menu item displayed in the menu grid. */
interface MenuPageItem {
  name: string
  price: string
  category: string
  badge: string
}

/** Static menu data for the menu route. */
const MENU_ITEMS: MenuPageItem[] = [
  { name: "Margherita Pizza", price: "₹299", category: "Pizza", badge: "Popular" },
  { name: "Chicken Burger", price: "₹199", category: "Burgers", badge: "New" },
  { name: "Paneer Tikka", price: "₹249", category: "Starters", badge: "Spicy" },
  { name: "Veg Biryani", price: "₹179", category: "Rice", badge: "" },
  { name: "Chocolate Shake", price: "₹149", category: "Drinks", badge: "" },
  { name: "Garlic Bread", price: "₹99", category: "Sides", badge: "" },
]

/**
 * MenuPage — displays the full restaurant menu in a card grid.
 *
 * Renders a responsive grid of menu items, each showing name,
 * category, price, and optional badge (Popular, New, Spicy).
 *
 * @returns The menu page React element.
 */
export default function MenuPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MENU_ITEMS.map((item) => (
          <Card key={item.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                {item.badge && (
                  <Badge variant="secondary">{item.badge}</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {item.category}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{item.price}</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
