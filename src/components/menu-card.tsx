import type { MenuItem } from "@/lib/menu-data";
import { cartStore } from "@/lib/cart-store";

const colorMap: Record<MenuItem["color"], string> = {
  tomato: "bg-tomato",
  mango: "bg-mango",
  mint: "bg-mint",
  sky: "bg-sky",
  grape: "bg-grape",
  berry: "bg-berry",
};

const tiltMap = ["rotate-[-1deg]", "rotate-[1deg]", "rotate-[-0.5deg]", "rotate-[0.5deg]"];

export function MenuCard({ item, index = 0 }: { item: MenuItem; index?: number }) {
  const tilt = tiltMap[index % tiltMap.length];
  return (
    <article
      className={`group relative rounded-3xl bg-card doodle-border shadow-doodle p-5 flex flex-col animate-pop-in press ${tilt}`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="absolute -top-3 right-4 flex gap-1">
        {item.popular && (
          <span className="rounded-full bg-mango doodle-border shadow-doodle-sm px-2.5 py-0.5 text-[11px] font-bold rotate-[6deg]">⭐ HOT</span>
        )}
        {item.spicy && (
          <span className="rounded-full bg-tomato text-primary-foreground doodle-border shadow-doodle-sm px-2.5 py-0.5 text-[11px] font-bold rotate-[-4deg]">🔥 Spicy</span>
        )}
        {item.veg && (
          <span className="rounded-full bg-mint doodle-border shadow-doodle-sm px-2.5 py-0.5 text-[11px] font-bold rotate-[3deg]">🌱 Veg</span>
        )}
      </div>

      <div className={`${colorMap[item.color]} doodle-border rounded-2xl aspect-square flex items-center justify-center text-8xl mb-4 relative overflow-hidden`}>
        <span className="drop-shadow-[4px_4px_0_rgba(0,0,0,0.4)] animate-float">{item.emoji}</span>
        <span className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-cream/30" aria-hidden />
        <span className="absolute top-2 left-2 text-xs font-bold bg-cream doodle-border rounded-full px-2 py-0.5">${item.price.toFixed(2)}</span>
      </div>

      <h3 className="font-display text-xl leading-tight">{item.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground font-medium line-clamp-2">{item.description}</p>

      <div className="mt-3 flex items-center gap-2 text-xs font-semibold">
        <span className="rounded-full bg-muted doodle-border px-2 py-0.5">🔥 {item.kcal} kcal</span>
        <span className="rounded-full bg-muted doodle-border px-2 py-0.5">⏱ {item.prepTime} min</span>
      </div>

      <button
        onClick={() => cartStore.add(item)}
        className="mt-4 w-full rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle-sm press py-2.5 font-bold"
      >
        + Add to Cart
      </button>
    </article>
  );
}
