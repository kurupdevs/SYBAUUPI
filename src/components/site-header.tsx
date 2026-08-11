import { Link } from "@tanstack/react-router"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"

/** Navigation links used in both desktop and mobile views. */
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
]

/**
 * SiteHeader — sticky top navigation bar with responsive design.
 *
 * Renders a desktop nav with inline links and a cart button,
 * and a mobile slide-out sheet triggered by a hamburger icon.
 *
 * @returns The site header React element.
 */
export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo / brand */}
        <Link to="/" className="flex items-center space-x-2" aria-label="SYBAUUPI Home">
          <span className="text-xl font-bold">SYBAUUPI</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
          <Link to="/cart">
            <Button variant="outline" size="sm" aria-label="View cart">
              Cart
            </Button>
          </Link>
        </nav>

        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden" aria-label="Open menu">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ to, label }) => (
                <Link key={to} to={to} className="text-sm font-medium">
                  {label}
                </Link>
              ))}
              <Link to="/cart" className="text-sm font-medium">
                Cart
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
