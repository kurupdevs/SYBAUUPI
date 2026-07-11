import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MenuCard } from "@/components/menu-card";
import { MENU, CATEGORIES } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FoodEat — Order Fresh Food, Delivered Doodle-Fast" },
      { name: "description", content: "Burgers, pizza, sushi, desserts, drinks. Real kitchens, real fast. Free delivery over $25." },
    ],
  }),
  component: Home,
});

function Home() {
  const popular = MENU.filter((m) => m.popular);
  return (
    <div className="min-h-screen bg-background bg-dots">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative z-10">
            <span className="inline-block rounded-full bg-lime doodle-border shadow-doodle-sm px-3 py-1 text-sm font-bold rotate-[-2deg]">
              🚀 Delivery in ~25 min
            </span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              Feed your <span className="inline-block bg-tomato text-primary-foreground doodle-border px-3 rotate-[-3deg]">cravings</span>,<br />
              doodle-fast.
            </h1>
            <p className="mt-5 max-w-md text-lg font-medium text-muted-foreground">
              Burgers stacked sky-high, pizza with the perfect char, sushi cut to order — all from your favorite local kitchens.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/menu" className="rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press px-6 py-3 font-bold text-lg">
                Order Now →
              </Link>
              <Link to="/about" className="rounded-full bg-cream doodle-border shadow-doodle press px-6 py-3 font-bold text-lg">
                How it Works
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm font-semibold">
              <div><span className="font-display text-2xl block">2M+</span>orders served</div>
              <div><span className="font-display text-2xl block">4.9★</span>avg rating</div>
              <div><span className="font-display text-2xl block">15k</span>partner chefs</div>
            </div>
          </div>

          <div className="relative h-[380px] md:h-[460px]">
            <div className="absolute inset-0 rounded-[3rem] bg-mustard doodle-border shadow-doodle-lg rotate-[-3deg]" />
            <div className="absolute inset-4 rounded-[2.5rem] bg-tomato doodle-border flex items-center justify-center">
              <div className="text-[16rem] leading-none animate-float">🍔</div>
            </div>
            <div className="absolute -top-4 -right-2 rounded-2xl bg-cream doodle-border shadow-doodle p-3 rotate-6 animate-wobble">
              <div className="text-4xl">🍕</div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-lime doodle-border shadow-doodle p-3 rotate-[-8deg] animate-float">
              <div className="text-4xl">🍩</div>
            </div>
            <div className="absolute top-1/2 -right-6 rounded-2xl bg-grape doodle-border shadow-doodle p-3 rotate-12">
              <div className="text-4xl">🥤</div>
            </div>
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-sky doodle-border animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl md:text-4xl">Browse the kitchen</h2>
          <Link to="/menu" className="hidden sm:inline text-sm font-bold underline">See full menu →</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CATEGORIES.map((c, i) => {
            const bg = ["bg-tomato", "bg-mustard", "bg-lime", "bg-sky", "bg-grape"][i % 5];
            return (
              <Link
                key={c.id}
                to="/menu"
                search={{ cat: c.id }}
                className={`${bg} doodle-border shadow-doodle press rounded-3xl p-5 flex flex-col items-center gap-2 animate-pop-in`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="text-5xl">{c.emoji}</span>
                <span className="font-display text-lg">{c.label}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-display text-3xl md:text-4xl">🔥 Trending today</h2>
        <p className="text-muted-foreground font-medium">The dishes our customers can't stop ordering.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((m, i) => <MenuCard key={m.id} item={m} index={i} />)}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-3xl md:text-4xl text-center">Three bites to order</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { emoji: "📖", title: "Pick your dish", body: "Browse the menu and add favorites to your cart.", bg: "bg-mustard" },
            { emoji: "🛵", title: "We cook & ship", body: "Kitchens fire up. Riders roll out. ETA in real time.", bg: "bg-lime" },
            { emoji: "😋", title: "Devour", body: "Hot food at your door in about 25 minutes. Enjoy.", bg: "bg-sky" },
          ].map((s, i) => (
            <div key={i} className={`${s.bg} doodle-border shadow-doodle rounded-3xl p-6`}>
              <div className="text-5xl">{s.emoji}</div>
              <h3 className="mt-3 font-display text-2xl">{i + 1}. {s.title}</h3>
              <p className="mt-2 font-medium">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
