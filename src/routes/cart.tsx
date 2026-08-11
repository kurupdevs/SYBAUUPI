import { useCartStore } from "../lib/cart-store"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Link } from "@tanstack/react-router"

/**
 * CartPage — shopping cart view.
 *
 * Displays all items currently in the cart using the Zustand store.
 * Provides buttons to remove individual items, clear the cart,
 * and proceed to checkout.
 *
 * @returns The cart page React element.
 */
export default function CartPage() {
  const { items, removeItem, clearCart, totalItems, totalPrice } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-muted-foreground mb-6">Your cart is empty.</p>
        <Link to="/menu">
          <Button>Browse Menu</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">
        Your Cart ({totalItems()} items)
      </h1>
      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <Card key={item.id}>
            <CardContent className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl font-bold">Total: ₹{totalPrice()}</p>
        <div className="flex gap-4">
          <Button variant="outline" onClick={clearCart}>
            Clear Cart
          </Button>
          <Link to="/checkout">
            <Button>Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
