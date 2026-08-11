import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

export default function CheckoutPage() {
  return (
    <div className="py-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <Card>
        <CardHeader><CardTitle>Delivery Details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div><Label>Name</Label><Input placeholder="Your name" /></div>
          <div><Label>Address</Label><Input placeholder="Delivery address" /></div>
          <div><Label>Phone</Label><Input placeholder="Phone number" /></div>
          <Button className="w-full">Place Order</Button>
        </CardContent>
      </Card>
    </div>
  )
}
