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
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  title: {
    color: 'white',
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  items: {
    marginBottom: '2rem'
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '15px',
    marginBottom: '1rem',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  },
  itemInfo: {
    flex: 1
  },
  itemName: {
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
    color: '#333'
  },
  itemPrice: {
    color: '#666',
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
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  quantity: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    minWidth: '30px',
    textAlign: 'center'
  },
  subtotal: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ff6347',
    minWidth: '80px',
    textAlign: 'right'
  },
  removeBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1.2rem'
  },
  summary: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  },
  totalText: {
    color: '#666',
    marginBottom: '0.5rem'
  },
  totalAmount: {
    color: '#ff6347',
    fontSize: '3rem',
    marginBottom: '1.5rem'
  },
  checkoutBtn: {
    padding: '1rem 3rem',
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    width: '100%'
  },
  emptyContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  },
  emptyCard: {
    backgroundColor: '#fff',
    padding: '3rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
  },
  emptyIcon: {
    fontSize: '5rem',
    display: 'block',
    marginBottom: '1rem'
  },
  emptyTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333'
  },
  emptyText: {
    color: '#666',
    marginBottom: '2rem',
    fontSize: '1.1rem'
  },
  browseBtn: {
    padding: '1rem 2rem',
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  }
};

export default Cart;
