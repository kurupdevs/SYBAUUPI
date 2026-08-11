import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

interface MenuCardProps { name: string; price: string; category: string; badge?: string }

export function MenuCard({ name, price, category, badge }: MenuCardProps) {
  return (
    <Card>
      <CardHeader><CardTitle className="text-lg">{name}</CardTitle></CardHeader>
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
