import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cartStore, cartTotals, useCart } from "@/lib/cart-store";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — FoodEat" }, { name: "description", content: "Complete your order." }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const cart = useCart();
  const { total, count } = cartTotals(cart);
  const nav = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [orderId] = useState(() => "FE-" + Math.random().toString(36).slice(2, 8).toUpperCase());

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPlaced(true);
    setTimeout(() => { cartStore.clear(); }, 800);
  }

  if (count === 0 && !placed) {
    return (
      <div className="min-h-screen bg-background bg-dots">
        <SiteHeader />
        <section className="mx-auto max-w-lg px-4 py-20 text-center">
          <div className="text-6xl">🛒</div>
          <h1 className="mt-3 font-display text-3xl">Nothing to check out</h1>
          <button onClick={() => nav({ to: "/menu" })} className="mt-5 rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press px-6 py-3 font-bold">Browse Menu</button>
        </section>
        <SiteFooter />
      </div>
    );
  }

  if (placed) {
    const eta = 20 + Math.floor(Math.random() * 15);
    return (
      <div className="min-h-screen bg-background bg-dots">
        <SiteHeader />
        <section className="mx-auto max-w-xl px-4 py-16 text-center">
          <div className="rounded-3xl bg-lime doodle-border shadow-doodle-lg p-8 animate-pop-in">
            <div className="text-7xl animate-wobble">🛵</div>
            <h1 className="mt-3 font-display text-4xl">Order placed!</h1>
            <p className="mt-2 font-semibold">Order <span className="font-display">#{orderId}</span></p>
            <p className="mt-1 font-medium">Estimated arrival in <b>{eta} minutes</b>.</p>
            <button onClick={() => nav({ to: "/" })} className="mt-6 rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press px-6 py-3 font-bold">Back to Home</button>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background bg-dots">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="font-display text-4xl">Checkout</h1>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-3xl bg-card doodle-border shadow-doodle p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" required placeholder="Alex Doe" />
            <Field label="Phone" required placeholder="+1 555 000 1234" type="tel" />
          </div>
          <Field label="Delivery Address" required placeholder="221B Baker Street, Apt 4" />
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="City" required placeholder="London" />
            <Field label="Postal" required placeholder="NW1 6XE" />
            <Field label="Apt / Note" placeholder="Leave at door" />
          </div>
          <div className="rounded-2xl bg-mustard doodle-border p-4">
            <h3 className="font-display text-xl">Payment</h3>
            <p className="text-xs font-semibold">Demo checkout — no real card required.</p>
            <div className="mt-3 grid sm:grid-cols-3 gap-3">
              <Field label="Card Number" placeholder="4242 4242 4242 4242" />
              <Field label="Expiry" placeholder="12/29" />
              <Field label="CVC" placeholder="123" />
            </div>
          </div>
          <button type="submit" className="mt-2 rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle press py-3 font-bold text-lg">
            Place order · ${total.toFixed(2)}
          </button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-bold">{label}</span>
      <input {...rest} className="mt-1 w-full rounded-xl doodle-border bg-cream px-3 py-2 font-semibold outline-none focus:bg-lime" />
    </label>
  );
}
