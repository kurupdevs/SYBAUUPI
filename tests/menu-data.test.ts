import { describe, it, expect } from "vitest"
import { menuItems } from "../src/lib/menu-data"

describe("menuItems", () => {
  it("contains at least one item", () => {
    expect(menuItems.length).toBeGreaterThan(0)
  })

  it("every item has a unique ID", () => {
    const ids = menuItems.map((item) => item.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(menuItems.length)
  })

  it("every item has a name, price, and category", () => {
    for (const item of menuItems) {
      expect(item.name).toBeTruthy()
      expect(typeof item.price).toBe("number")
      expect(item.price).toBeGreaterThan(0)
      expect(item.category).toBeTruthy()
    }
  })

  it("all prices are positive numbers", () => {
    for (const item of menuItems) {
      expect(item.price).toBeGreaterThan(0)
    }
  })

  it("contains expected categories", () => {
    const categories = new Set(menuItems.map((i) => i.category))
    expect(categories.has("Pizza")).toBe(true)
    expect(categories.has("Burgers")).toBe(true)
    expect(categories.has("Drinks")).toBe(true)
  })
})
