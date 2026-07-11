import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cartStore, cartTotals, useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your Cart — FoodEat" }, { name: "description", content: "Review your order and check out." }] }),
  component: CartPage,
});

function CartPage() {
  const cart = useCart();
  const nav = useNavigate();
  const lines = Object.values(cart);
  const { count, subtotal, delivery, tax, total } = cartTotals(cart);

  if (count === 0) {
    return (
      <div className="min-h-screen bg-background bg-dots">
        <SiteHeader />
        <section className="mx-auto max-w-2xl px-4 py-20 text-center">
          <div className="text-7xl animate-wobble">🍽️</div>
          <h1 className="mt-4 font-display text-4xl">Your cart is empty</h1>
          <p className="mt-2 font-medium text-muted-foreground">Add something delicious from the menu.</p>
          <Link to="/menu" className="mt-6 inline-block rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press px-6 py-3 font-bold text-lg">
            Browse Menu
          </Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background bg-dots">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-4 py-8 grid lg:grid-cols-[1fr_360px] gap-8">
        <div>
          <h1 className="font-display text-4xl">Your Cart</h1>
          <ul className="mt-6 space-y-4">
            {lines.map((l) => (
              <li key={l.item.id} className="rounded-2xl bg-card doodle-border shadow-doodle p-4 flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl bg-mustard doodle-border flex items-center justify-center text-3xl shrink-0">{l.item.emoji}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg leading-tight truncate">{l.item.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">${l.item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => cartStore.remove(l.item.id)} className="h-9 w-9 rounded-full bg-cream doodle-border shadow-doodle-sm press font-bold">−</button>
                  <span className="font-display text-lg w-6 text-center">{l.qty}</span>
                  <button onClick={() => cartStore.add(l.item)} className="h-9 w-9 rounded-full bg-lime doodle-border shadow-doodle-sm press font-bold">+</button>
                </div>
                <div className="w-20 text-right font-display text-lg">${(l.qty * l.item.price).toFixed(2)}</div>
              </li>
            ))}
          </ul>
          <button onClick={() => cartStore.clear()} className="mt-4 text-sm font-bold underline">Clear cart</button>
        </div>

        <aside className="rounded-3xl bg-card doodle-border shadow-doodle-lg p-6 h-fit sticky top-24">
          <h2 className="font-display text-2xl">Order Summary</h2>
          <dl className="mt-4 space-y-2 font-semibold">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>${subtotal.toFixed(2)}</dd></div>
            <div className="flex justify-between"><dt>Delivery</dt><dd>{delivery === 0 ? "FREE" : `$${delivery.toFixed(2)}`}</dd></div>
            <div className="flex justify-between"><dt>Tax (8%)</dt><dd>${tax.toFixed(2)}</dd></div>
            <div className="border-t-[3px] border-foreground pt-3 flex justify-between font-display text-2xl"><dt>Total</dt><dd>${total.toFixed(2)}</dd></div>
          </dl>
          {subtotal < 25 && (
            <p className="mt-3 text-xs font-bold rounded-lg bg-mustard doodle-border p-2">
              Add ${(25 - subtotal).toFixed(2)} more for FREE delivery!
            </p>
          )}
          <button
            onClick={() => nav({ to: "/checkout" })}
            className="mt-5 w-full rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press py-3 font-bold text-lg"
          >
            Checkout →
          </button>
        </aside>
      </section>
      <SiteFooter />
    </div>
  );
}
