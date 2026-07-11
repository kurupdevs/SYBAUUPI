import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cartStore, cartTotals, useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — FoodEat" },
      { name: "description", content: "Review your FoodEat order before checkout." },
      { property: "og:title", content: "Your FoodEat Cart" },
      { property: "og:description", content: "Review your order before checking out." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const cart = useCart();
  const lines = Object.values(cart);
  const totals = cartTotals(cart);

  return (
    <div className="min-h-screen bg-background bg-dots">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="font-display text-5xl">Your Cart 🛒</h1>
        <p className="mt-2 font-medium text-muted-foreground">Free delivery on orders over $25.</p>

        {lines.length === 0 ? (
          <div className="mt-8 rounded-3xl bg-card doodle-border shadow-doodle p-10 text-center">
            <div className="text-7xl animate-wobble">🥡</div>
            <h2 className="mt-3 font-display text-3xl">Nothing here yet</h2>
            <p className="mt-1 text-muted-foreground font-medium">Add something delicious to get started.</p>
            <Link to="/menu" className="mt-6 inline-block rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle-sm press px-5 py-2 font-bold">Browse menu →</Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
            <ul className="space-y-4">
              {lines.map((l) => (
                <li key={l.item.id} className="rounded-3xl bg-card doodle-border shadow-doodle-sm p-4 flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 rounded-2xl bg-mango doodle-border flex items-center justify-center text-3xl">{l.item.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-xl truncate">{l.item.name}</div>
                    <div className="text-sm text-muted-foreground font-medium truncate">{l.item.description}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => cartStore.remove(l.item.id)}
                      className="h-9 w-9 rounded-full bg-cream doodle-border shadow-doodle-sm press font-bold"
                    >−</button>
                    <span className="w-6 text-center font-bold">{l.qty}</span>
                    <button
                      onClick={() => cartStore.add(l.item)}
                      className="h-9 w-9 rounded-full bg-mint doodle-border shadow-doodle-sm press font-bold"
                    >+</button>
                  </div>
                  <div className="w-20 text-right font-display text-lg">${(l.item.price * l.qty).toFixed(2)}</div>
                </li>
              ))}
              <button
                onClick={() => cartStore.clear()}
                className="text-sm font-bold underline underline-offset-4"
              >
                Clear cart
              </button>
            </ul>

            <aside className="rounded-3xl bg-cream doodle-border shadow-doodle p-6 h-fit sticky top-24">
              <h3 className="font-display text-2xl">Order summary</h3>
              <dl className="mt-4 space-y-2 font-semibold">
                <div className="flex justify-between"><dt>Subtotal</dt><dd>${totals.subtotal.toFixed(2)}</dd></div>
                <div className="flex justify-between"><dt>Delivery</dt><dd>{totals.delivery === 0 ? "FREE" : `$${totals.delivery.toFixed(2)}`}</dd></div>
                <div className="flex justify-between"><dt>Tax</dt><dd>${totals.tax.toFixed(2)}</dd></div>
                <div className="border-t-[3px] border-foreground pt-3 flex justify-between font-display text-2xl">
                  <dt>Total</dt><dd>${totals.total.toFixed(2)}</dd>
                </div>
              </dl>
              <Link to="/checkout" className="mt-6 block text-center rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press py-3 font-bold text-lg">
                Checkout →
              </Link>
            </aside>
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
