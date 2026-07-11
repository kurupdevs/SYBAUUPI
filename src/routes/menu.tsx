import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MenuCard } from "@/components/menu-card";
import { MENU, CATEGORIES, type Category } from "@/lib/menu-data";
import { useState } from "react";

const searchSchema = z.object({
  cat: z.enum(["burgers", "pizza", "sushi", "desserts", "drinks"]).optional(),
});

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — FoodEat" },
      { name: "description", content: "Explore burgers, pizza, sushi, desserts and drinks from top local kitchens." },
    ],
  }),
  validateSearch: searchSchema,
  component: MenuPage,
});

function MenuPage() {
  const { cat } = Route.useSearch();
  const [q, setQ] = useState("");

  const filtered = MENU.filter((m) => (!cat || m.category === cat) && (
    !q.trim() || m.name.toLowerCase().includes(q.toLowerCase()) || m.description.toLowerCase().includes(q.toLowerCase())
  ));

  return (
    <div className="min-h-screen bg-background bg-dots">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="font-display text-4xl md:text-5xl">The Menu</h1>
        <p className="text-muted-foreground font-medium">Freshly cooked. Doodle-fast.</p>

        <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search dishes..."
            className="w-full md:max-w-sm rounded-full doodle-border shadow-doodle-sm bg-card px-4 py-3 font-semibold outline-none focus:bg-mustard"
          />
          <div className="flex flex-wrap gap-2">
            <Link
              to="/menu"
              className={`rounded-full doodle-border shadow-doodle-sm press px-4 py-2 font-bold ${!cat ? "bg-primary text-primary-foreground" : "bg-card"}`}
            >
              All
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                to="/menu"
                search={{ cat: c.id as Category }}
                className={`rounded-full doodle-border shadow-doodle-sm press px-4 py-2 font-bold ${cat === c.id ? "bg-lime" : "bg-card"}`}
              >
                {c.emoji} {c.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m, i) => <MenuCard key={m.id} item={m} index={i} />)}
        </div>
        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <div className="text-6xl">🫙</div>
            <p className="mt-2 font-bold">No dishes match your search.</p>
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
