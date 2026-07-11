export type Category = "burgers" | "pizza" | "sushi" | "desserts" | "drinks" | "sides";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  emoji: string;
  color: "tomato" | "mango" | "mint" | "sky" | "grape" | "berry";
  kcal: number;
  prepTime: number;
  popular?: boolean;
  spicy?: boolean;
  veg?: boolean;
}

export const CATEGORIES: { id: Category; label: string; emoji: string }[] = [
  { id: "burgers", label: "Burgers", emoji: "🍔" },
  { id: "pizza", label: "Pizza", emoji: "🍕" },
  { id: "sushi", label: "Sushi", emoji: "🍣" },
  { id: "sides", label: "Sides", emoji: "🍟" },
  { id: "desserts", label: "Desserts", emoji: "🍩" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
];

export const MENU: MenuItem[] = [
  { id: "b1", name: "Big Kahuna Burger", description: "Double smashed patty, cheddar, pickles, house sauce.", price: 8.5, category: "burgers", emoji: "🍔", color: "tomato", kcal: 720, prepTime: 12, popular: true },
  { id: "b2", name: "Truffle Mushroom", description: "Swiss, sautéed mushrooms, truffle mayo, brioche.", price: 10.9, category: "burgers", emoji: "🍄", color: "mango", kcal: 810, prepTime: 14 },
  { id: "b3", name: "Buffalo Chicken", description: "Crispy chicken, hot sauce, blue cheese, celery slaw.", price: 9.2, category: "burgers", emoji: "🌶️", color: "berry", kcal: 690, prepTime: 13, spicy: true },
  { id: "b4", name: "Garden Beet Stack", description: "House beet patty, avocado, arugula, tahini.", price: 9.9, category: "burgers", emoji: "🥑", color: "mint", kcal: 540, prepTime: 12, veg: true },
  { id: "p1", name: "Margherita Classica", description: "San Marzano, fior di latte, basil, EVOO.", price: 11, category: "pizza", emoji: "🍕", color: "tomato", kcal: 860, prepTime: 15, popular: true, veg: true },
  { id: "p2", name: "Pepperoni Storm", description: "Cup-and-char pepperoni, mozzarella, oregano.", price: 12.5, category: "pizza", emoji: "🌶️", color: "berry", kcal: 940, prepTime: 15, spicy: true },
  { id: "p3", name: "Four Cheese", description: "Mozzarella, gorgonzola, parmesan, taleggio.", price: 13, category: "pizza", emoji: "🧀", color: "mango", kcal: 970, prepTime: 16, veg: true },
  { id: "s1", name: "Salmon Nigiri (6pc)", description: "Fresh Atlantic salmon, seasoned rice.", price: 9.5, category: "sushi", emoji: "🍣", color: "tomato", kcal: 420, prepTime: 10 },
  { id: "s2", name: "Dragon Roll", description: "Eel, avocado, cucumber, unagi glaze.", price: 13.9, category: "sushi", emoji: "🐉", color: "mint", kcal: 560, prepTime: 12, popular: true },
  { id: "s3", name: "Spicy Tuna Roll", description: "Tuna, sriracha mayo, scallion, sesame.", price: 10.5, category: "sushi", emoji: "🐟", color: "berry", kcal: 480, prepTime: 11, spicy: true },
  { id: "si1", name: "Truffle Fries", description: "Crispy shoestring, truffle oil, parmesan, chive.", price: 5.5, category: "sides", emoji: "🍟", color: "mango", kcal: 480, prepTime: 6, popular: true, veg: true },
  { id: "si2", name: "Onion Rings", description: "Beer-battered, house buttermilk ranch.", price: 4.9, category: "sides", emoji: "🧅", color: "mango", kcal: 520, prepTime: 7, veg: true },
  { id: "si3", name: "Loaded Nachos", description: "Melted cheddar, jalapeño, sour cream, salsa.", price: 6.9, category: "sides", emoji: "🌮", color: "tomato", kcal: 640, prepTime: 8, spicy: true, veg: true },
  { id: "d1", name: "Molten Choco Lava", description: "Warm dark chocolate cake, vanilla bean ice cream.", price: 6.5, category: "desserts", emoji: "🍫", color: "grape", kcal: 520, prepTime: 8, popular: true, veg: true },
  { id: "d2", name: "Glazed Donut Stack", description: "Three fluffy donuts, rainbow sprinkles.", price: 5, category: "desserts", emoji: "🍩", color: "berry", kcal: 460, prepTime: 5, veg: true },
  { id: "d3", name: "Matcha Tiramisù", description: "Mascarpone, ladyfingers, ceremonial matcha.", price: 7.2, category: "desserts", emoji: "🍵", color: "mint", kcal: 380, prepTime: 6, veg: true },
  { id: "dr1", name: "Strawberry Shake", description: "Real strawberries, whole milk, whipped cream.", price: 4.5, category: "drinks", emoji: "🍓", color: "berry", kcal: 340, prepTime: 4, veg: true },
  { id: "dr2", name: "Bubble Milk Tea", description: "Black tea, brown sugar boba, oat milk.", price: 4.9, category: "drinks", emoji: "🧋", color: "mango", kcal: 290, prepTime: 5, popular: true, veg: true },
  { id: "dr3", name: "Cold Brew", description: "18-hour steep, single origin Ethiopian.", price: 3.8, category: "drinks", emoji: "☕", color: "grape", kcal: 15, prepTime: 3, veg: true },
];
