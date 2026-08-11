/** A single menu item for display on the menu page. */
export interface MenuItemData {
  id: string
  name: string
  price: number
  category: string
}

/**
 * Static menu items available in the restaurant.
 *
 * Used by the menu route to populate the card grid.
 */
export const menuItems: MenuItemData[] = [
  { id: "1", name: "Margherita Pizza", price: 299, category: "Pizza" },
  { id: "2", name: "Chicken Burger", price: 199, category: "Burgers" },
  { id: "3", name: "Paneer Tikka", price: 249, category: "Starters" },
  { id: "4", name: "Veg Biryani", price: 179, category: "Rice" },
  { id: "5", name: "Chocolate Shake", price: 149, category: "Drinks" },
  { id: "6", name: "Garlic Bread", price: 99, category: "Sides" },
]
