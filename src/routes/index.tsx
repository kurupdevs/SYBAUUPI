import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MenuCard } from "@/components/menu-card";
import { MENU, CATEGORIES } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FoodEat — Order Fresh Food, Delivered Doodle-Fast" },
      { name: "description", content: "Burgers, pizza, sushi, sides, desserts, drinks. Real kitchens, real fast. Free delivery over $25." },
      { property: "og:title", content: "FoodEat — Fresh Food, Doodle-Fast Delivery" },
      { property: "og:description", content: "Cravings, handled. Order in seconds from FoodEat." },
    ],
  }),
  component: Home,
});

const testimonials = [
  { name: "Maya R.", tag: "Foodie", quote: "The Big Kahuna arrived hot and stacked. Best burger delivery in town.", color: "bg-mango", emoji: "🍔" },
  { name: "Jordan T.", tag: "Sushi lover", quote: "Dragon Roll was perfect. Real fish, real fresh, faster than my mood swings.", color: "bg-mint", emoji: "🐉" },
  { name: "Priya S.", tag: "Sweet tooth", quote: "The molten lava cake is dangerous. I've ordered it 4 times this week.", color: "bg-berry text-primary-foreground", emoji: "🍫" },
];

function Home() {
  const popular = MENU.filter((m) => m.popular).slice(0, 6);
  return (
    <div className="min-h-screen bg-background bg-dots">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-20 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative z-10">
            <span className="inline-block rounded-full bg-mint doodle-border shadow-doodle-sm px-3 py-1 text-sm font-bold rotate-[-2deg]">
              🚀 Delivery in ~25 min
            </span>
            <h1 className="mt-5 font-display text-6xl md:text-8xl leading-[0.9]">
              Feed your{" "}
              <span className="inline-block bg-berry text-primary-foreground doodle-border px-3 rotate-[-3deg] shadow-doodle-sm">cravings</span>
              ,<br />
              doodle-fast.
            </h1>
            <p className="mt-5 max-w-md text-lg font-medium text-muted-foreground">
              Burgers stacked sky-high, pizza with perfect char, sushi cut to order — all from the best local kitchens.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/menu" className="rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press px-6 py-3 font-bold text-lg">
                Order Now →
              </Link>
              <Link to="/about" className="rounded-full bg-cream doodle-border shadow-doodle press px-6 py-3 font-bold text-lg">
                How it Works
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm font-semibold">
              <div><span className="font-display text-3xl block">2M+</span>orders served</div>
              <div><span className="font-display text-3xl block">4.9★</span>avg rating</div>
              <div><span className="font-display text-3xl block">15k</span>partner chefs</div>
            </div>
          </div>

          {/* Hero doodle stack */}
          <div className="relative h-[420px] md:h-[520px]">
            <div className="absolute inset-0 bg-mint doodle-border rounded-[2rem] shadow-doodle-xl rotate-[-3deg]" />
            <div className="absolute inset-4 bg-cream doodle-border rounded-[1.6rem] shadow-doodle-lg rotate-[2deg] flex items-center justify-center">
              <span className="text-[14rem] md:text-[18rem] leading-none drop-shadow-[6px_6px_0_rgba(0,0,0,0.35)] animate-float">🍔</span>
            </div>
            <span className="absolute -top-4 -right-2 text-6xl animate-bob">🍕</span>
            <span className="absolute bottom-6 -left-4 text-5xl animate-wobble">🍩</span>
            <span className="absolute top-10 left-6 text-4xl animate-spin-slow">✨</span>
            <span className="absolute bottom-16 right-8 text-4xl animate-float">🥤</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-4xl">Browse the menu</h2>
          <Link to="/menu" className="hidden sm:inline rounded-full bg-cream doodle-border shadow-doodle-sm press px-4 py-2 font-bold text-sm">See all →</Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.id}
              to="/menu"
              className="rounded-2xl bg-card doodle-border shadow-doodle-sm press p-4 text-center animate-pop-in"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="text-4xl">{c.emoji}</div>
              <div className="mt-1 font-bold text-sm">{c.label}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular */}
      <section className="mx-auto max-w-6xl px-4 mt-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-4xl">🔥 Popular now</h2>
          <Link to="/menu" className="rounded-full bg-cream doodle-border shadow-doodle-sm press px-4 py-2 font-bold text-sm">See all →</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((m, i) => <MenuCard key={m.id} item={m} index={i} />)}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 mt-20">
        <h2 className="font-display text-4xl text-center">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", title: "Pick your food", desc: "Browse hundreds of dishes from local kitchens.", color: "bg-mango", emoji: "📖" },
            { n: "02", title: "Fresh & fast", desc: "Kitchens prep the moment you order. No warming trays.", color: "bg-mint", emoji: "👨‍🍳" },
            { n: "03", title: "At your door", desc: "Riders track your food live. Doorbell in ~25 minutes.", color: "bg-berry text-primary-foreground", emoji: "🛵" },
          ].map((s, i) => (
            <div key={s.n} className={`${s.color} rounded-3xl doodle-border shadow-doodle p-6 relative animate-pop-in`} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="text-6xl mb-3">{s.emoji}</div>
              <div className="font-display text-6xl opacity-30 absolute top-4 right-5">{s.n}</div>
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 mt-20">
        <h2 className="font-display text-4xl text-center">People are hungry (and happy)</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`${t.color} rounded-3xl doodle-border shadow-doodle p-6 animate-pop-in`} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="text-4xl">{t.emoji}</div>
              <p className="mt-3 font-medium leading-snug">“{t.quote}”</p>
              <div className="mt-4 text-sm font-bold">— {t.name} · <span className="opacity-70">{t.tag}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 mt-20">
        <div className="rounded-[2rem] bg-berry text-primary-foreground doodle-border shadow-doodle-lg p-10 text-center relative overflow-hidden">
          <span className="absolute -top-6 -left-6 text-8xl opacity-20 animate-spin-slow">🍕</span>
          <span className="absolute -bottom-8 -right-6 text-8xl opacity-20 animate-wobble">🍔</span>
          <h2 className="font-display text-5xl">Hungry yet?</h2>
          <p className="mt-2 max-w-md mx-auto font-medium">Get your first order delivered free. Use code <span className="bg-cream text-foreground doodle-border rounded-md px-2">FOODEAT</span> at checkout.</p>
          <Link to="/menu" className="mt-6 inline-block rounded-full bg-mint text-foreground doodle-border shadow-doodle press px-6 py-3 font-bold text-lg">
            Start Ordering →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
