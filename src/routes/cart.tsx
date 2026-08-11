import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Link } from "@tanstack/react-router"

export default function CartPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">Your cart is empty</p>
          <Link to="/menu"><Button>Browse Menu</Button></Link>
        </CardContent>
      </Card>
    </div>
  )
}
