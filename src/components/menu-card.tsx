import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

/**
 * Props for the MenuCard component.
 *
 * @property name - Display name of the menu item.
 * @property price - Formatted price string (e.g. "₹299").
 * @property category - Category label for the item.
 * @property badge - Optional badge text (e.g. "Popular", "New").
 */
interface MenuCardProps {
  name: string
  price: string
  category: string
  badge?: string
}

/**
 * MenuCard — renders a single menu item in a card layout.
 *
 * Displays the item name, category, price, and an optional
 * badge (e.g. "Popular" or "New"). Includes an "Add" button.
 *
 * @param props - See {@link MenuCardProps}.
 * @returns A card React element representing the menu item.
 */
export function MenuCard({ name, price, category, badge }: MenuCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{name}</CardTitle>
          {badge && (
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
              {badge}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold">{price}</span>
          <Button size="sm">Add</Button>
        </div>
      </CardContent>
    </Card>
  )
}
