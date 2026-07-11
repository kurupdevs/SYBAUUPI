import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-[3px] border-foreground bg-mango">
      <div className="border-b-[3px] border-foreground bg-berry text-primary-foreground overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-3 text-2xl font-display">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span>🍔 EAT FRESH</span>
              <span>·</span>
              <span>🍕 DELIVERED FAST</span>
              <span>·</span>
              <span>🍣 REAL KITCHENS</span>
              <span>·</span>
              <span>🍩 SWEET DEALS</span>
              <span>·</span>
              <span>🥤 CHILL VIBES</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-berry text-primary-foreground doodle-border shadow-doodle-sm text-2xl">🍔</span>
            <span className="font-display text-3xl">FoodEat</span>
          </div>
          <p className="mt-3 text-sm font-medium">Cravings, handled. Fresh food from your favorite kitchens — delivered doodle-fast.</p>
        </div>
        <div>
          <h4 className="font-display text-xl mb-2">Explore</h4>
          <ul className="space-y-1 text-sm font-semibold">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/menu" className="hover:underline">Menu</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-2">Support</h4>
          <ul className="space-y-1 text-sm font-semibold">
            <li>help@foodeat.app</li>
            <li>+1 (555) 010-EATS</li>
            <li>Mon–Sun · 9am–1am</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-2">Follow</h4>
          <a
            href="https://instagram.com/glitterwine"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cream doodle-border shadow-doodle-sm press px-3 py-2 font-bold"
          >
            <span>📸</span> @glitterwine
          </a>
        </div>
      </div>
      <div className="border-t-[3px] border-foreground bg-berry text-primary-foreground text-center py-3 text-sm font-bold">
        © {new Date().getFullYear()} FoodEat · Made with 🧡 by @glitterwine
      </div>
    </footer>
  );
}
