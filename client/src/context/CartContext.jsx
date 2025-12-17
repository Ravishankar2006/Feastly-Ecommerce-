import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Load cart from localStorage on mount
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Load orders from localStorage on mount
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save orders to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem._id === item._id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem._id === item._id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item._id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item => 
        item._id === itemId ? { ...item, quantity } : item
      ));
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    
    const deliveryTime = 30; // 30 seconds for demo
    const newOrder = {
      id: Date.now().toString(),
      items: [...cart],
      total: getTotal().toFixed(2),
      date: new Date().toLocaleDateString(),
      status: 'preparing',
      deliveryTime: deliveryTime,
      timeRemaining: deliveryTime
    };
    
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    clearCart();
    return newOrder;
  };

  const updateOrderStatus = (orderId, status, timeRemaining = null) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status, ...(timeRemaining !== null && { timeRemaining }) }
          : order
      )
    );
  };

  const cancelOrder = (orderId) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      orders,
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      getTotal,
      clearCart,
      placeOrder,
      updateOrderStatus,
      cancelOrder
    }}>
      {children}
    </CartContext.Provider>
  );
};
