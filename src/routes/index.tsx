import { Link } from "@tanstack/react-router"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

/**
 * HomePage — landing page with hero section and feature cards.
 *
 * Displays a hero banner with CTA buttons (View Menu, Learn More),
 * followed by a 3-column grid of feature highlights.
 *
 * @returns The home page React element.
 */
export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24 text-center">
        <Badge className="mb-4" variant="secondary">
          New & Improved
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          SYBAUUPI
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Your ultimate destination for premium food delivery. Fast, fresh, and
          right to your doorstep.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/menu">
            <Button size="lg">View Menu</Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>🍎 Fresh Ingredients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We use only the freshest, locally-sourced ingredients for every dish.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>🚀 Fast Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Hot food delivered to your door in 30 minutes or less, guaranteed.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>💯 Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Not happy? We'll make it right. Your satisfaction is our priority.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
