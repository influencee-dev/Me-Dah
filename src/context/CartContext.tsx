import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  item: { id: number; name: string; price: number };
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: { id: number; name: string; price: number }) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.item.id === itemId ? { ...i, quantity } : i))
    );
  };

  const total = cart.reduce((sum, i) => sum + i.item.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
