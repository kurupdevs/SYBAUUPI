import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FoodEat" },
      { name: "description", content: "The story behind FoodEat — real chefs, real kitchens, doodle-fast delivery." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background bg-dots">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-display text-5xl">About FoodEat</h1>
        <p className="mt-4 text-lg font-medium max-w-2xl">
          FoodEat connects hungry humans with the best local kitchens in seconds.
          Real chefs. Real ingredients. Real fast. And a splash of doodle-color to make every order feel like a treat.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { emoji: "🧑‍🍳", title: "Handpicked kitchens", body: "Every partner is vetted for quality, hygiene and consistency." },
            { emoji: "🌿", title: "Fresh sourcing", body: "Ingredients arrive daily from local farms and markets." },
            { emoji: "⚡", title: "Fast riders", body: "Insulated bags, live tracking, average 25-minute delivery." },
          ].map((c, i) => (
            <div key={i} className="rounded-3xl bg-card doodle-border shadow-doodle p-5">
              <div className="text-4xl">{c.emoji}</div>
              <h3 className="mt-2 font-display text-xl">{c.title}</h3>
              <p className="mt-1 font-medium">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-tomato text-primary-foreground doodle-border shadow-doodle-lg p-8 rotate-[-1deg]">
          <h2 className="font-display text-3xl">Made with 🧡 by @glitterwine</h2>
          <p className="mt-2 font-semibold">Hand-doodled, thoughtfully coded, always warm.</p>
          <a href="https://instagram.com/glitterwine" target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-full bg-cream text-foreground doodle-border shadow-doodle-sm press px-4 py-2 font-bold">
            📸 Follow @glitterwine
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
