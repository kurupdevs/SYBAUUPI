import type { MenuItem } from "@/lib/menu-data";
import { cartStore } from "@/lib/cart-store";

const colorMap: Record<MenuItem["color"], string> = {
  tomato: "bg-tomato",
  mustard: "bg-mustard",
  lime: "bg-lime",
  sky: "bg-sky",
  grape: "bg-grape",
};

export function MenuCard({ item, index = 0 }: { item: MenuItem; index?: number }) {
  return (
    <article
      className="group relative rounded-3xl bg-card doodle-border shadow-doodle p-5 flex flex-col animate-pop-in press"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {item.popular && (
        <span className="absolute -top-3 -left-3 rounded-full bg-lime doodle-border shadow-doodle-sm px-3 py-1 text-xs font-bold rotate-[-6deg]">
          ⭐ Popular
        </span>
      )}
      <div className={`${colorMap[item.color]} doodle-border rounded-2xl aspect-square flex items-center justify-center text-7xl mb-4 relative overflow-hidden`}>
        <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.35)] animate-float">{item.emoji}</span>
        <span className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-cream/40" aria-hidden />
      </div>
      <h3 className="font-display text-xl leading-tight">{item.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground font-medium line-clamp-2">{item.description}</p>
      <div className="mt-3 flex items-center gap-2 text-xs font-semibold">
        <span className="rounded-full bg-muted doodle-border px-2 py-0.5">🔥 {item.kcal} kcal</span>
        <span className="rounded-full bg-muted doodle-border px-2 py-0.5">⏱ {item.prepTime} min</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-display text-2xl">${item.price.toFixed(2)}</span>
        <button
          onClick={() => cartStore.add(item)}
          className="rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle-sm press px-4 py-2 font-bold text-sm"
        >
          + Add
        </button>
      </div>
    </article>
  );
}
