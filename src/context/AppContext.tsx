import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { TAX_RATE, type Product } from "@/data/menu";

const AUTH_KEY = "ordr.auth.user";
const VALID_USER = "admin";
const VALID_PASS = "admin123";

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderRecord {
  number: string;
  placedAt: string;
  itemCount: number;
  total: number;
  items: { id: string; name: string; quantity: number }[];
}

interface AppState {
  user: string | null;
  authReady: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  items: CartItem[];
  addItem: (product: Product) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  orders: OrderRecord[];
  addOrder: (order: OrderRecord) => void;
  count: number;
  subtotal: number;
  tax: number;
  total: number;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<OrderRecord[]>([]);


  useEffect(() => {
    try {
      setUser(window.localStorage.getItem(AUTH_KEY));
    } catch {
      setUser(null);
    }
    setAuthReady(true);
  }, []);

  const login = useCallback((username: string, password: string) => {
    if (username.trim().toLowerCase() !== VALID_USER || password !== VALID_PASS) {
      return false;
    }
    try {
      window.localStorage.setItem(AUTH_KEY, VALID_USER);
    } catch {
      /* storage unavailable */
    }
    setUser(VALID_USER);
    return true;
  }, []);

  const logout = useCallback(() => {
    try {
      window.localStorage.removeItem(AUTH_KEY);
    } catch {
      /* storage unavailable */
    }
    setUser(null);
    setItems([]);
    setOrders([]);

  }, []);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const increment = useCallback((id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    );
  }, []);

  const decrement = useCallback((id: string) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const addOrder = useCallback((order: OrderRecord) => {
    setOrders((prev) => [order, ...prev]);
  }, []);

  const value = useMemo<AppState>(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = Math.round(subtotal * TAX_RATE);
    return {
      user,
      authReady,
      login,
      logout,
      items,
      addItem,
      increment,
      decrement,
      removeItem,
      clearCart,
      orders,
      addOrder,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      tax,
      total: subtotal + tax,
    };
  }, [
    user,
    authReady,
    login,
    logout,
    items,
    addItem,
    increment,
    decrement,
    removeItem,
    clearCart,
    orders,
    addOrder,
  ]);


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
