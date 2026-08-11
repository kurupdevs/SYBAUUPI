import { create } from "zustand"

/**
 * Represents a single item in the shopping cart.
 *
 * @property id - Unique identifier for the menu item.
 * @property name - Display name of the item.
 * @property price - Unit price in rupees.
 * @property quantity - Number of units in cart.
 */
interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

/**
 * Zustand store shape for managing the shopping cart.
 *
 * Provides atomic add/remove/clear operations and computed
 * getters for total items and total price.
 */
interface CartStore {
  items: CartItem[]
  /** Add an item; increments quantity if already present. */
  addItem: (item: Omit<CartItem, "quantity">) => void
  /** Remove an item entirely by its ID. */
  removeItem: (id: string) => void
  /** Empty the entire cart. */
  clearCart: () => void
  /** Total number of items across all line items. */
  totalItems: () => number
  /** Total price in rupees. */
  totalPrice: () => number
}

/**
 * Cart store backed by Zustand.
 *
 * @example
 * const { items, addItem, totalPrice } = useCartStore()
 * addItem({ id: "1", name: "Pizza", price: 299 })
 */
export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((s) => {
      const existing = s.items.find((i) => i.id === item.id)
      if (existing) {
        return {
          items: s.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      }
      return { items: [...s.items, { ...item, quantity: 1 }] }
    }),

  removeItem: (id) =>
    set((s) => ({ items: s.items.filter((i) => i.id !== id) })),

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

  totalPrice: () =>
    get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
}))
