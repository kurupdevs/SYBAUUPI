import { create } from "zustand"

interface CartItem { id: string; name: string; price: number; quantity: number }

interface CartStore {
 items: CartItem[]
 addItem: (item: Omit<CartItem, "quantity">) => void
 removeItem: (id: string) => void
 clearCart: () => void
 totalItems: () => number
 totalPrice: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
 items: [],
 addItem: (item) => set((s) => {
  const ex = s.items.find((i) => i.id === item.id)
  if (ex) return { items: s.items.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i) }
  return { items: [...s.items, { ...item, quantity: 1 }] }
 }),
 removeItem: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
 clearCart: () => set({ items: [] }),
 totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
 totalPrice: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
}))
