import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FoodEat" },
      { name: "description", content: "Meet FoodEat: the doodle-fast food delivery app built for real cravings." },
      { property: "og:title", content: "About FoodEat" },
      { property: "og:description", content: "Meet the team behind FoodEat and how we deliver doodle-fast." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background bg-dots">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-4 pt-10">
        <div className="rounded-3xl bg-berry text-primary-foreground doodle-border shadow-doodle-lg p-8 md:p-12 relative overflow-hidden">
          <span className="absolute -top-6 -right-6 text-8xl opacity-30 animate-wobble">🍔</span>
          <h1 className="font-display text-5xl md:text-6xl">Food, drawn with love.</h1>
          <p className="mt-4 max-w-xl font-medium text-lg">
            FoodEat connects hungry humans with the best kitchens in your neighborhood.
            Real chefs, real fresh, real fast. No warming trays. No shortcuts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 mt-10 grid md:grid-cols-3 gap-6">
        {[
          { title: "Kitchens first", desc: "We partner with independent restaurants, not chains. Every dish comes from someone who cares.", emoji: "👨‍🍳", color: "bg-mango" },
          { title: "Fair riders", desc: "Our couriers earn transparent pay, plus tips. Faster food, happier drivers.", emoji: "🛵", color: "bg-mint" },
          { title: "Zero fake stars", desc: "Real reviews from real orders. No pay-to-play rankings.", emoji: "⭐", color: "bg-cream" },
        ].map((c, i) => (
          <div key={c.title} className={`${c.color} rounded-3xl doodle-border shadow-doodle p-6 animate-pop-in`} style={{ animationDelay: `${i * 80}ms` }}>
            <div className="text-5xl">{c.emoji}</div>
            <h3 className="mt-3 font-display text-2xl">{c.title}</h3>
            <p className="mt-2 text-sm font-medium">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 mt-14">
        <h2 className="font-display text-4xl">The story</h2>
        <div className="mt-4 rounded-3xl bg-card doodle-border shadow-doodle p-6 font-medium text-lg leading-relaxed">
          FoodEat started as a sketchbook. A doodle of a burger, a slice of pizza, a bowl of ramen — all
          the things we wanted to eat right now but couldn't wait for. So we built the fastest, friendliest
          food app we could imagine: bright, chunky, honest, and hungry. Today we ship over 2 million
          orders a year with a network of 15,000+ chefs and 8,000 riders.
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 mt-14 text-center">
        <div className="rounded-3xl bg-mango doodle-border shadow-doodle-lg p-10">
          <h2 className="font-display text-4xl">Ready to eat?</h2>
          <Link to="/menu" className="mt-4 inline-block rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press px-6 py-3 font-bold text-lg">
            See the Menu →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
