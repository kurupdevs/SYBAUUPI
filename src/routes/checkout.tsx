import { useCartStore } from "../lib/cart-store"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Link } from "@tanstack/react-router"

/**
 * CheckoutPage — order summary and confirmation.
 *
 * Shows a final summary of the cart contents with total
 * price and a "Place Order" button that clears the cart
 * on confirmation.
 *
 * @returns The checkout page React element.
 */
export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore()

  const handlePlaceOrder = () => {
    alert("Order placed successfully!")
    clearCart()
  }

  if (items.length === 0) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-muted-foreground mb-6">No items to checkout.</p>
        <Link to="/menu">
          <Button>Browse Menu</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{totalPrice()}</span>
          </div>
          <Button className="w-full" size="lg" onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
