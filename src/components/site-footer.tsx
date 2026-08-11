import { Link } from "@tanstack/react-router"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Careers
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Menu</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/menu" className="text-sm text-muted-foreground hover:text-foreground">
                Full Menu
              </Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Specials
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SYBAUUPI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
