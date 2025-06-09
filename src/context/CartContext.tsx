import React, { createContext, useContext, useReducer, useState } from 'react';
import { Cart, CartItem } from '../types/Cart';

interface CartContextType {
  cart: Cart;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartDrawerContextType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const CartDrawerContext = createContext<CartDrawerContextType | undefined>(undefined);

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: calculateTotal([...state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )])
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: calculateTotal([...state.items, { ...action.payload, quantity: 1 }])
      };
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: calculateTotal(state.items.filter(item => item.id !== action.payload))
      };
      
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: calculateTotal(state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ))
      };
      
    case 'CLEAR_CART':
      return {
        items: [],
        total: 'R$ 0,00'
      };
      
    default:
      return state;
  }
}

function calculateTotal(items: CartItem[]): string {
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
    return sum + (price * item.quantity);
  }, 0);
  
  return `R$ ${total.toFixed(2).replace('.', ',')}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], total: 'R$ 0,00' });
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    setIsCartOpen(true);
  };
  
  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  
  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      <CartDrawerContext.Provider value={{
        isOpen: isCartOpen,
        onOpen: () => setIsCartOpen(true),
        onClose: () => setIsCartOpen(false)
      }}>
        {children}
      </CartDrawerContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function useCartDrawer() {
  const context = useContext(CartDrawerContext);
  if (context === undefined) {
    throw new Error('useCartDrawer must be used within a CartProvider');
  }
  return context;
}