"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number; // Asegúrate de que cada artículo tenga un precio
  quantity?: number; // La cantidad será manejada internamente
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void; // No necesitamos pasar la cantidad aquí
  removeFromCart: (id: string) => void; // Función para eliminar un artículo
  clearCart: () => void;
  getTotalPrice: () => number; // Nueva función para obtener el precio total
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Agregar al carrito
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex >= 0) {
        // Si el artículo ya existe, actualizar la cantidad
        return prevCart.map((cartItem, index) => {
          if (index === existingItemIndex) {
            return {
              ...cartItem,
              quantity: (cartItem.quantity || 0) + 1,
            };
          }
          return cartItem;
        });
      } else {
        // Si el artículo no existe, agregarlo con cantidad 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  

  // Eliminar un artículo del carrito
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calcular el precio total
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
