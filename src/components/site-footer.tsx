import { Link } from "@tanstack/react-router"

/** Footer link sections for the site. */
const FOOTER_SECTIONS = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/", label: "Careers" },
    ],
  },
  {
    title: "Menu",
    links: [
      { to: "/menu", label: "Full Menu" },
      { to: "/", label: "Specials" },
    ],
  },
  {
    title: "Support",
    links: [
      { to: "/", label: "Contact" },
      { to: "/", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/", label: "Privacy" },
      { to: "/", label: "Terms" },
    ],
  },
]

/**
 * SiteFooter — multi-column footer with links and copyright.
 *
 * Displays a responsive 4-column grid of footer links on desktop
 * (2-column on mobile) plus a copyright bar.
 *
 * @returns The site footer React element.
 */
export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-background" role="contentinfo">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
              <nav className="flex flex-col gap-2" aria-label={section.title}>
                {section.links.map(({ to, label }) => (
                  <Link
                    key={label}
                    to={to}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          &copy; {year} SYBAUUPI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
