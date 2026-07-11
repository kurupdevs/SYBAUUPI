import { useSyncExternalStore } from "react";
import type { MenuItem } from "./menu-data";

const KEY = "foodeat.cart.v1";

export interface CartLine { item: MenuItem; qty: number }

type Cart = Record<string, CartLine>;

const listeners = new Set<() => void>();
let cart: Cart = {};
let hydrated = false;

function load() {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(KEY);
    cart = raw ? JSON.parse(raw) : {};
  } catch { cart = {}; }
  hydrated = true;
}

function persist() {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(cart));
  listeners.forEach((l) => l());
}

function ensure() { if (!hydrated) load(); }

export const cartStore = {
  subscribe(cb: () => void) { listeners.add(cb); return () => listeners.delete(cb); },
  get(): Cart { ensure(); return cart; },
  add(item: MenuItem) {
    ensure();
    const line = cart[item.id];
    cart = { ...cart, [item.id]: { item, qty: (line?.qty ?? 0) + 1 } };
    persist();
  },
  remove(id: string) {
    ensure();
    const line = cart[id]; if (!line) return;
    if (line.qty <= 1) { const { [id]: _, ...rest } = cart; cart = rest; }
    else cart = { ...cart, [id]: { ...line, qty: line.qty - 1 } };
    persist();
  },
  clear() { cart = {}; persist(); },
};

export function useCart() {
  return useSyncExternalStore(
    cartStore.subscribe,
    () => cartStore.get(),
    () => ({}) as Cart,
  );
}

export function cartTotals(cart: Cart) {
  const items = Object.values(cart);
  const count = items.reduce((s, l) => s + l.qty, 0);
  const subtotal = items.reduce((s, l) => s + l.qty * l.item.price, 0);
  const delivery = subtotal > 0 ? (subtotal >= 25 ? 0 : 2.99) : 0;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + delivery + tax).toFixed(2);
  return { count, subtotal: +subtotal.toFixed(2), delivery, tax, total };
}
