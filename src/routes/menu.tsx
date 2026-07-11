import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MenuCard } from "@/components/menu-card";
import { CATEGORIES, MENU, type Category } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — FoodEat" },
      { name: "description", content: "The full FoodEat menu: burgers, pizza, sushi, sides, desserts and drinks." },
      { property: "og:title", content: "FoodEat Menu" },
      { property: "og:description", content: "Browse the full FoodEat menu and order in seconds." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<Category | "all">("all");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    return MENU.filter((m) => (active === "all" ? true : m.category === active))
      .filter((m) => m.name.toLowerCase().includes(q.toLowerCase()));
  }, [active, q]);

  return (
    <div className="min-h-screen bg-background bg-dots">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="rounded-3xl bg-mint doodle-border shadow-doodle p-6 md:p-8 relative overflow-hidden">
          <span className="absolute -top-4 -right-4 text-7xl animate-wobble">🍜</span>
          <h1 className="font-display text-5xl md:text-6xl">The Menu</h1>
          <p className="mt-2 max-w-md font-medium">Everything we make, right now, hot and ready.</p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search dishes…"
              className="flex-1 rounded-full bg-card doodle-border shadow-doodle-sm px-5 py-3 font-semibold outline-none focus:shadow-doodle"
            />
          </div>
        </div>
      </section>

      {/* Category chips */}
      <section className="mx-auto max-w-6xl px-4 mt-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActive("all")}
            className={`shrink-0 rounded-full doodle-border px-4 py-2 font-bold text-sm press ${active === "all" ? "bg-berry text-primary-foreground shadow-doodle-sm" : "bg-card shadow-doodle-sm"}`}
          >
            ✨ All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`shrink-0 rounded-full doodle-border px-4 py-2 font-bold text-sm press ${active === c.id ? "bg-berry text-primary-foreground shadow-doodle-sm" : "bg-card shadow-doodle-sm"}`}
            >
              {c.emoji} {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 mt-6">
        {items.length === 0 ? (
          <div className="rounded-3xl bg-card doodle-border shadow-doodle p-10 text-center">
            <div className="text-6xl">🫥</div>
            <p className="mt-3 font-display text-2xl">No dishes match that.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((m, i) => <MenuCard key={m.id} item={m} index={i} />)}
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
