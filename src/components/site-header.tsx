import { Link } from "@tanstack/react-router"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">SYBAUUPI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/menu" className="text-sm font-medium transition-colors hover:text-primary">
            Menu
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/cart">
            <Button variant="outline" size="sm">Cart</Button>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-sm font-medium">Home</Link>
              <Link to="/menu" className="text-sm font-medium">Menu</Link>
              <Link to="/about" className="text-sm font-medium">About</Link>
              <Link to="/cart" className="text-sm font-medium">Cart</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
