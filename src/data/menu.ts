export type CategoryId =
  | "all"
  | "burgers"
  | "pizza"
  | "pasta"
  | "snacks"
  | "desserts"
  | "drinks";

export interface Category {
  id: CategoryId;
  name: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: Exclude<CategoryId, "all">;
  description: string;
  price: number;
  image: string;
  rating: number;
}

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories: Category[] = [
  { id: "all", name: "All", image: img("photo-1504674900247-0877df9cc836", 300) },
  { id: "burgers", name: "Burgers", image: img("photo-1568901346375-23c9450c58cd", 300) },
  { id: "pizza", name: "Pizza", image: img("photo-1513104890138-7c749659a591", 300) },
  { id: "pasta", name: "Pasta", image: img("photo-1621996346565-e3dbc646d9a9", 300) },
  { id: "snacks", name: "Snacks", image: img("photo-1573080496219-bb080dd4f877", 300) },
  { id: "desserts", name: "Desserts", image: img("photo-1578985545062-69928b1d9587", 300) },
  { id: "drinks", name: "Drinks", image: img("photo-1544145945-f90425340c7e", 300) },
];

export const products: Product[] = [
  {
    id: "b1",
    name: "Classic Chicken Burger",
    category: "burgers",
    description: "Grilled chicken, lettuce, tomato and our special house sauce.",
    price: 249,
    image: img("photo-1568901346375-23c9450c58cd"),
    rating: 4.6,
  },
  {
    id: "b2",
    name: "Double Cheese Smash",
    category: "burgers",
    description: "Two smashed patties, molten cheddar and caramelised onion.",
    price: 329,
    image: img("photo-1571091718767-18b5b1457add"),
    rating: 4.8,
  },
  {
    id: "b3",
    name: "Crispy Paneer Burger",
    category: "burgers",
    description: "Spiced paneer fritter, mint mayo and crunchy slaw.",
    price: 229,
    image: img("photo-1550547660-d9450f859349"),
    rating: 4.4,
  },
  {
    id: "b4",
    name: "Smoky BBQ Bacon",
    category: "burgers",
    description: "Flame grilled patty, smoked bacon and tangy BBQ glaze.",
    price: 359,
    image: img("photo-1586190848861-99aa4a171e90"),
    rating: 4.7,
  },
  {
    id: "p1",
    name: "Pizza Margherita",
    category: "pizza",
    description: "San Marzano tomato, fior di latte and fresh basil.",
    price: 299,
    image: img("photo-1513104890138-7c749659a591"),
    rating: 4.7,
  },
  {
    id: "p2",
    name: "Pepperoni Classic",
    category: "pizza",
    description: "Cupping pepperoni, mozzarella and oregano on thin crust.",
    price: 379,
    image: img("photo-1565299624946-b28f40a0ae38"),
    rating: 4.9,
  },
  {
    id: "p3",
    name: "Garden Veggie",
    category: "pizza",
    description: "Bell peppers, olives, corn and red onion with herbs.",
    price: 319,
    image: img("photo-1604068549290-dea0e4a305ca"),
    rating: 4.3,
  },
  {
    id: "p4",
    name: "Truffle Mushroom",
    category: "pizza",
    description: "Wild mushrooms, truffle oil and a parmesan finish.",
    price: 449,
    image: img("photo-1595854341625-f33ee10dbf94"),
    rating: 4.8,
  },
  {
    id: "pa1",
    name: "Creamy Alfredo",
    category: "pasta",
    description: "Fettuccine tossed in a silky parmesan cream sauce.",
    price: 289,
    image: img("photo-1621996346565-e3dbc646d9a9"),
    rating: 4.5,
  },
  {
    id: "pa2",
    name: "Arrabbiata Penne",
    category: "pasta",
    description: "Penne in a fiery tomato garlic sauce with chilli flakes.",
    price: 259,
    image: img("photo-1551183053-bf91a1d81141"),
    rating: 4.4,
  },
  {
    id: "pa3",
    name: "Pesto Basilico",
    category: "pasta",
    description: "Hand pounded basil pesto, pine nuts and cherry tomatoes.",
    price: 309,
    image: img("photo-1473093295043-cdd812d0e601"),
    rating: 4.6,
  },
  {
    id: "pa4",
    name: "Baked Lasagne",
    category: "pasta",
    description: "Layered ragu, béchamel and a golden cheese crust.",
    price: 349,
    image: img("photo-1608219992759-8d74ed8d76eb"),
    rating: 4.7,
  },
  {
    id: "s1",
    name: "Peri Peri Fries",
    category: "snacks",
    description: "Crisp golden fries dusted with tangy peri peri spice.",
    price: 149,
    image: img("photo-1573080496219-bb080dd4f877"),
    rating: 4.5,
  },
  {
    id: "s2",
    name: "Loaded Nachos",
    category: "snacks",
    description: "Corn chips, cheese sauce, jalapeños and salsa fresca.",
    price: 219,
    image: img("photo-1582169296194-e4d644c48063"),
    rating: 4.6,
  },
  {
    id: "s3",
    name: "Buffalo Wings",
    category: "snacks",
    description: "Six wings glazed in buttery buffalo sauce with dip.",
    price: 279,
    image: img("photo-1608039755401-742074f0548d"),
    rating: 4.8,
  },
  {
    id: "s4",
    name: "Veg Spring Rolls",
    category: "snacks",
    description: "Crunchy rolls filled with garlic tossed vegetables.",
    price: 169,
    image: img("photo-1548507200-47d7a1b3ca2f"),
    rating: 4.2,
  },
  {
    id: "d1",
    name: "Molten Chocolate Cake",
    category: "desserts",
    description: "Warm chocolate sponge with a flowing dark centre.",
    price: 199,
    image: img("photo-1578985545062-69928b1d9587"),
    rating: 4.9,
  },
  {
    id: "d2",
    name: "New York Cheesecake",
    category: "desserts",
    description: "Dense baked cheesecake with a berry compote swirl.",
    price: 249,
    image: img("photo-1551024506-0bccd828d307"),
    rating: 4.7,
  },
  {
    id: "d3",
    name: "Fudge Brownie",
    category: "desserts",
    description: "Rich walnut brownie served with vanilla gelato.",
    price: 179,
    image: img("photo-1606313564200-e75d5e30476c"),
    rating: 4.6,
  },
  {
    id: "d4",
    name: "Tiramisu Cup",
    category: "desserts",
    description: "Espresso soaked ladyfingers layered with mascarpone.",
    price: 229,
    image: img("photo-1571877227200-a0d98ea607e9"),
    rating: 4.5,
  },
  {
    id: "dr1",
    name: "Fresh Orange Juice",
    category: "drinks",
    description: "Cold pressed oranges, no added sugar. Served chilled.",
    price: 129,
    image: img("photo-1600271886742-f049cd451bba"),
    rating: 4.4,
  },
  {
    id: "dr2",
    name: "Classic Cold Coffee",
    category: "drinks",
    description: "Slow brewed coffee blended with milk and ice.",
    price: 159,
    image: img("photo-1461023058943-07fcbe16d735"),
    rating: 4.6,
  },
  {
    id: "dr3",
    name: "Berry Smoothie",
    category: "drinks",
    description: "Strawberry, blueberry and yogurt whipped till creamy.",
    price: 189,
    image: img("photo-1553530666-ba11a7da3888"),
    rating: 4.5,
  },
  {
    id: "dr4",
    name: "Mint Lemonade",
    category: "drinks",
    description: "Sparkling lemonade muddled with fresh garden mint.",
    price: 119,
    image: img("photo-1497534446932-c925b458314e"),
    rating: 4.3,
  },
];

export const TAX_RATE = 0.05;

export const formatPrice = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
