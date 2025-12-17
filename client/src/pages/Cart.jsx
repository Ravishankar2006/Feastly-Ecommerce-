import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();
  const navigate = useNavigate();

  console.log('Cart items:', cart);

  if (cart.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <div style={styles.emptyCard}>
          <span style={styles.emptyIcon}>🛒</span>
          <h2 style={styles.emptyTitle}>Your cart is empty</h2>
          <p style={styles.emptyText}>Add some delicious items to get started!</p>
          <button onClick={() => navigate('/')} style={styles.browseBtn}>
            Browse Restaurants
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Animated Background */}
      <div style={styles.backgroundEffect}>
        <div style={{...styles.floatingOrb, top: '5%', left: '5%', background: '#00d4ff', animationDelay: '0s'}}></div>
        <div style={{...styles.floatingOrb, top: '60%', right: '10%', background: '#8b5cf6', animationDelay: '2s'}}></div>
        <div style={{...styles.floatingOrb, bottom: '10%', left: '50%', background: '#f472b6', animationDelay: '4s'}}></div>
      </div>
      <h1 style={styles.title}>🛒 Your Cart</h1>
      <div style={styles.content}>
        <div style={styles.items}>
          {cart.map((item) => (
            <div key={item._id} style={styles.item}>
              <div style={styles.itemInfo}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemPrice}>₹{item.price} each</p>
              </div>
              <div style={styles.controls}>
                <button 
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  style={styles.qtyBtn}
                >
                  −
                </button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  style={styles.qtyBtn}
                >
                  +
                </button>
                <span style={styles.subtotal}>₹{item.price * item.quantity}</span>
                <button 
                  onClick={() => removeFromCart(item._id)}
                  style={styles.removeBtn}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.summary}>
          <h2 style={styles.totalText}>Total Amount</h2>
          <h1 style={styles.totalAmount}>₹{getTotal()}</h1>
          <button 
            style={styles.checkoutBtn}
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
    position: 'relative',
    overflow: 'hidden'
  },
  backgroundEffect: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 0
  },
  floatingOrb: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.12,
    animation: 'float 8s ease-in-out infinite'
  },
  title: {
    color: 'white',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    background: 'linear-gradient(to right, #00d4ff, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    position: 'relative',
    zIndex: 1
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
  },
  items: {
    marginBottom: '2rem'
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    background: 'rgba(26, 26, 26, 0.6)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    marginBottom: '1rem',
    border: '1px solid rgba(0, 212, 255, 0.3)',
    boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)',
    transition: 'all 0.3s ease'
  },
  itemInfo: {
    flex: 1
  },
  itemName: {
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
    color: '#fff'
  },
  itemPrice: {
    color: '#9ca3af',
    fontSize: '0.9rem'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  qtyBtn: {
    width: '35px',
    height: '35px',
    backgroundColor: '#2a2a2a',
    color: '#00d4ff',
    border: '1px solid #00d4ff',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease'
  },
  quantity: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    minWidth: '30px',
    textAlign: 'center',
    color: '#fff'
  },
  subtotal: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#00d4ff',
    minWidth: '80px',
    textAlign: 'right'
  },
  removeBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#2a2a2a',
    color: '#f472b6',
    border: '1px solid #f472b6',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease'
  },
  summary: {
    background: 'rgba(26, 26, 26, 0.6)',
    backdropFilter: 'blur(10px)',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    border: '1px solid rgba(139, 92, 246, 0.4)',
    boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)'
  },
  totalText: {
    color: '#9ca3af',
    marginBottom: '0.5rem'
  },
  totalAmount: {
    color: '#00d4ff',
    fontSize: '3rem',
    marginBottom: '1.5rem'
  },
  checkoutBtn: {
    padding: '1rem 3rem',
    background: 'linear-gradient(to right, #00d4ff, #8b5cf6)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    width: '100%',
    transition: 'all 0.3s ease'
  },
  emptyContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  },
  emptyCard: {
    background: 'rgba(26, 26, 26, 0.6)',
    backdropFilter: 'blur(10px)',
    padding: '3rem',
    borderRadius: '20px',
    textAlign: 'center',
    border: '1px solid rgba(0, 212, 255, 0.3)',
    boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)'
  },
  emptyIcon: {
    fontSize: '5rem',
    display: 'block',
    marginBottom: '1rem'
  },
  emptyTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#fff'
  },
  emptyText: {
    color: '#9ca3af',
    marginBottom: '2rem',
    fontSize: '1.1rem'
  },
  browseBtn: {
    padding: '1rem 2rem',
    background: 'linear-gradient(to right, #00d4ff, #8b5cf6)',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  }
};

export default Cart;
