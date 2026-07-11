export type Category = "burgers" | "pizza" | "sushi" | "desserts" | "drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  emoji: string;
  color: "tomato" | "mustard" | "lime" | "sky" | "grape";
  kcal: number;
  prepTime: number;
  popular?: boolean;
}

export const CATEGORIES: { id: Category; label: string; emoji: string }[] = [
  { id: "burgers", label: "Burgers", emoji: "🍔" },
  { id: "pizza", label: "Pizza", emoji: "🍕" },
  { id: "sushi", label: "Sushi", emoji: "🍣" },
  { id: "desserts", label: "Desserts", emoji: "🍩" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
];

export const MENU: MenuItem[] = [
  { id: "b1", name: "Big Kahuna Burger", description: "Double smashed patty, cheddar, pickles, house sauce.", price: 8.5, category: "burgers", emoji: "🍔", color: "tomato", kcal: 720, prepTime: 12, popular: true },
  { id: "b2", name: "Truffle Mushroom", description: "Swiss, sautéed mushrooms, truffle mayo, brioche.", price: 10.9, category: "burgers", emoji: "🍄", color: "mustard", kcal: 810, prepTime: 14 },
  { id: "b3", name: "Buffalo Chicken", description: "Crispy chicken, hot sauce, blue cheese, celery slaw.", price: 9.2, category: "burgers", emoji: "🌶️", color: "tomato", kcal: 690, prepTime: 13 },
  { id: "p1", name: "Margherita Classica", description: "San Marzano, fior di latte, basil, EVOO.", price: 11, category: "pizza", emoji: "🍕", color: "tomato", kcal: 860, prepTime: 15, popular: true },
  { id: "p2", name: "Pepperoni Storm", description: "Cup-and-char pepperoni, mozzarella, oregano.", price: 12.5, category: "pizza", emoji: "🌶️", color: "mustard", kcal: 940, prepTime: 15 },
  { id: "p3", name: "Four Cheese", description: "Mozzarella, gorgonzola, parmesan, taleggio.", price: 13, category: "pizza", emoji: "🧀", color: "mustard", kcal: 970, prepTime: 16 },
  { id: "s1", name: "Salmon Nigiri (6pc)", description: "Fresh Atlantic salmon, seasoned rice.", price: 9.5, category: "sushi", emoji: "🍣", color: "tomato", kcal: 420, prepTime: 10 },
  { id: "s2", name: "Dragon Roll", description: "Eel, avocado, cucumber, unagi glaze.", price: 13.9, category: "sushi", emoji: "🐉", color: "lime", kcal: 560, prepTime: 12, popular: true },
  { id: "s3", name: "Spicy Tuna Roll", description: "Tuna, sriracha mayo, scallion, sesame.", price: 10.5, category: "sushi", emoji: "🐟", color: "tomato", kcal: 480, prepTime: 11 },
  { id: "d1", name: "Molten Choco Lava", description: "Warm dark chocolate cake, vanilla bean ice cream.", price: 6.5, category: "desserts", emoji: "🍫", color: "grape", kcal: 520, prepTime: 8 },
  { id: "d2", name: "Glazed Donut Stack", description: "Three fluffy donuts, rainbow sprinkles.", price: 5, category: "desserts", emoji: "🍩", color: "grape", kcal: 460, prepTime: 5 },
  { id: "d3", name: "Matcha Tiramisù", description: "Mascarpone, ladyfingers, ceremonial matcha.", price: 7.2, category: "desserts", emoji: "🍵", color: "lime", kcal: 380, prepTime: 6 },
  { id: "dr1", name: "Strawberry Shake", description: "Real strawberries, whole milk, whipped cream.", price: 4.5, category: "drinks", emoji: "🍓", color: "tomato", kcal: 340, prepTime: 4 },
  { id: "dr2", name: "Bubble Milk Tea", description: "Black tea, brown sugar boba, oat milk.", price: 4.9, category: "drinks", emoji: "🧋", color: "mustard", kcal: 290, prepTime: 5, popular: true },
  { id: "dr3", name: "Cold Brew", description: "18-hour steep, single origin Ethiopian.", price: 3.8, category: "drinks", emoji: "☕", color: "grape", kcal: 15, prepTime: 3 },
];
