import { describe, it, expect, beforeEach } from "vitest"
import { useCartStore } from "../src/lib/cart-store"

/** Reset the cart store before each test. */
function resetStore() {
  useCartStore.setState({ items: [] })
}

describe("useCartStore", () => {
  beforeEach(resetStore)

  it("starts with an empty cart", () => {
    const { items, totalItems, totalPrice } = useCartStore.getState()
    expect(items).toHaveLength(0)
    expect(totalItems()).toBe(0)
    expect(totalPrice()).toBe(0)
  })

  it("adds a new item to the cart", () => {
    const { addItem } = useCartStore.getState()
    addItem({ id: "1", name: "Pizza", price: 299 })
    const { items, totalItems, totalPrice } = useCartStore.getState()
    expect(items).toHaveLength(1)
    expect(items[0].quantity).toBe(1)
    expect(totalItems()).toBe(1)
    expect(totalPrice()).toBe(299)
  })

  it("increments quantity when adding the same item", () => {
    const { addItem } = useCartStore.getState()
    addItem({ id: "1", name: "Pizza", price: 299 })
    addItem({ id: "1", name: "Pizza", price: 299 })
    const { items, totalItems, totalPrice } = useCartStore.getState()
    expect(items).toHaveLength(1)
    expect(items[0].quantity).toBe(2)
    expect(totalItems()).toBe(2)
    expect(totalPrice()).toBe(598)
  })

  it("adds multiple different items", () => {
    const { addItem } = useCartStore.getState()
    addItem({ id: "1", name: "Pizza", price: 299 })
    addItem({ id: "2", name: "Burger", price: 199 })
    const { items, totalItems, totalPrice } = useCartStore.getState()
    expect(items).toHaveLength(2)
    expect(totalItems()).toBe(2)
    expect(totalPrice()).toBe(498)
  })

  it("removes an item by ID", () => {
    const { addItem, removeItem } = useCartStore.getState()
    addItem({ id: "1", name: "Pizza", price: 299 })
    addItem({ id: "2", name: "Burger", price: 199 })
    removeItem("1")
    const { items, totalItems } = useCartStore.getState()
    expect(items).toHaveLength(1)
    expect(totalItems()).toBe(1)
  })

  it("clearCart empties all items", () => {
    const { addItem, clearCart } = useCartStore.getState()
    addItem({ id: "1", name: "Pizza", price: 299 })
    addItem({ id: "2", name: "Burger", price: 199 })
    clearCart()
    const { items, totalItems } = useCartStore.getState()
    expect(items).toHaveLength(0)
    expect(totalItems()).toBe(0)
  })

  it("calculates total price correctly with quantities", () => {
    const { addItem } = useCartStore.getState()
    addItem({ id: "1", name: "Pizza", price: 299 })
    addItem({ id: "1", name: "Pizza", price: 299 })
    addItem({ id: "2", name: "Shake", price: 149 })
    // 299*2 + 149 = 747
    const { totalPrice } = useCartStore.getState()
    expect(totalPrice()).toBe(747)
  })

  it("handles removing non-existent item gracefully", () => {
    const { addItem, removeItem } = useCartStore.getState()
    addItem({ id: "1", name: "Pizza", price: 299 })
    // Should not throw
    removeItem("nonexistent")
    const { items } = useCartStore.getState()
    expect(items).toHaveLength(1)
  })
})
