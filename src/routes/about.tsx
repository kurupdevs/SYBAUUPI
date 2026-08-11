import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function AboutPage() {
  return (
    <div className="py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            SYBAUUPI was founded with a simple mission: make great food
            accessible to everyone. We partner with the best local
            restaurants to bring you fresh, delicious meals.
          </p>
          <p className="text-muted-foreground">
            From our kitchen to your doorstep, we ensure every order
            is prepared with care and delivered with speed.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
