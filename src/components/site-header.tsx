import { Link } from "@tanstack/react-router";
import { useCart, cartTotals } from "@/lib/cart-store";

export function SiteHeader() {
  const cart = useCart();
  const { count } = cartTotals(cart);
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-foreground bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-tomato doodle-border shadow-doodle-sm text-xl animate-wobble">🍔</span>
          <span className="font-display text-2xl leading-none">FoodEat</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {[
            { to: "/", label: "Home" },
            { to: "/menu", label: "Menu" },
            { to: "/about", label: "About" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-lg font-semibold hover:bg-mustard hover:doodle-border"
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-lime doodle-border shadow-doodle-sm" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/cart"
          className="relative inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle-sm press px-4 py-2 font-bold"
        >
          <span>🛒</span>
          <span className="hidden sm:inline">Cart</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-lime text-foreground doodle-border text-xs font-bold px-1.5">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
