import { Link } from "@tanstack/react-router"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function AboutPage() {
  return (
    <div className="py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">About SYBAUUPI</h1>
      <Card>
        <CardHeader><CardTitle>Our Story</CardTitle></CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            SYBAUUPI was founded with a simple mission: deliver exceptional food
            experiences to your doorstep. We partner with the best local restaurants
            and chefs to bring you a curated menu of delicious options.
          </p>
        </CardContent>
      </Card>
      <div className="mt-8 text-center">
        <Link to="/menu"><Button size="lg">Explore Our Menu</Button></Link>
      </div>
    </div>
  )
}
