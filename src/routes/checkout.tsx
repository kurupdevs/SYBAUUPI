import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cartStore, cartTotals, useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — FoodEat" },
      { name: "description", content: "Complete your FoodEat order." },
      { property: "og:title", content: "FoodEat Checkout" },
      { property: "og:description", content: "Finish your order and get food delivered fast." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const cart = useCart();
  const totals = cartTotals(cart);
  const [placed, setPlaced] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "", pay: "card" });

  const canSubmit = form.name.trim() && form.phone.trim() && form.address.trim() && totals.subtotal > 0;

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const id = "FE-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setPlaced(id);
    cartStore.clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background bg-dots">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-4 pt-10">
        {placed ? (
          <div className="rounded-3xl bg-mint doodle-border shadow-doodle-lg p-10 text-center relative overflow-hidden">
            <span className="absolute -top-4 -left-4 text-7xl animate-spin-slow">✨</span>
            <span className="absolute -bottom-4 -right-4 text-7xl animate-wobble">🛵</span>
            <div className="text-7xl">🎉</div>
            <h1 className="mt-3 font-display text-5xl">Order placed!</h1>
            <p className="mt-2 font-semibold">Confirmation <span className="bg-cream doodle-border rounded-md px-2">{placed}</span></p>
            <p className="mt-1 font-medium text-muted-foreground">Your food is being prepared. ETA ~25 min.</p>
            <Link to="/" className="mt-6 inline-block rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press px-6 py-3 font-bold text-lg">Back to Home</Link>
          </div>
        ) : (
          <>
            <h1 className="font-display text-5xl">Checkout</h1>
            <p className="mt-2 font-medium text-muted-foreground">Almost there. Just a few details.</p>

            <form onSubmit={placeOrder} className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
              <div className="rounded-3xl bg-card doodle-border shadow-doodle p-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" />
                  <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+1 555 010 4444" />
                </div>
                <Field label="Delivery address" value={form.address} onChange={(v) => setForm({ ...form, address: v })} placeholder="221B Baker Street, Apt 4" />
                <Field label="Notes for the kitchen" value={form.notes} onChange={(v) => setForm({ ...form, notes: v })} placeholder="Ring the doorbell twice" />

                <div>
                  <div className="font-bold mb-2">Payment</div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "card", label: "💳 Card" },
                      { id: "cash", label: "💵 Cash" },
                      { id: "upi", label: "📱 UPI" },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setForm({ ...form, pay: p.id })}
                        className={`rounded-full doodle-border py-2 font-bold text-sm press ${form.pay === p.id ? "bg-berry text-primary-foreground shadow-doodle-sm" : "bg-cream shadow-doodle-sm"}`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="rounded-3xl bg-cream doodle-border shadow-doodle p-6 h-fit lg:sticky lg:top-24">
                <h3 className="font-display text-2xl">Order summary</h3>
                <dl className="mt-4 space-y-2 font-semibold">
                  <div className="flex justify-between"><dt>Subtotal</dt><dd>${totals.subtotal.toFixed(2)}</dd></div>
                  <div className="flex justify-between"><dt>Delivery</dt><dd>{totals.delivery === 0 ? "FREE" : `$${totals.delivery.toFixed(2)}`}</dd></div>
                  <div className="flex justify-between"><dt>Tax</dt><dd>${totals.tax.toFixed(2)}</dd></div>
                  <div className="border-t-[3px] border-foreground pt-3 flex justify-between font-display text-2xl">
                    <dt>Total</dt><dd>${totals.total.toFixed(2)}</dd>
                  </div>
                </dl>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="mt-6 w-full rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press py-3 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Place order →
                </button>
                {totals.subtotal === 0 && (
                  <p className="mt-3 text-sm text-center font-semibold">Your cart is empty. <Link to="/menu" className="underline">Add something</Link>.</p>
                )}
              </aside>
            </form>
          </>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="block">
      <span className="block font-bold text-sm mb-1">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-cream doodle-border shadow-doodle-sm px-4 py-3 font-semibold outline-none focus:shadow-doodle"
      />
    </label>
  );
}
