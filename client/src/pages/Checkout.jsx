import React, { useState } from 'react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const subtotal = 25.00;
  const deliveryFee = 2.00;
  const tax = 3.00;
  const total = 30.00;

  return (
    <div style={styles.container}>
      <div style={styles.orderSummary}>
        <h2>Order Summary</h2>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h3>Total: ${total.toFixed(2)}</h3>
        
        <div style={styles.address}>
          <h3>Delivery Address</h3>
          <p>16A Main street,</p>
          <p>Thoothukudi</p>
        </div>
      </div>

      <div style={styles.paymentSection}>
        <h2>Select Payment Method</h2>
        <button 
          style={styles.paymentBtn}
          onClick={() => setPaymentMethod('card')}
        >
          Credit/Debit Card
        </button>
        <button 
          style={styles.paymentBtn}
          onClick={() => setPaymentMethod('wallet')}
        >
          Digital Wallet
        </button>
        <button 
          style={styles.paymentBtn}
          onClick={() => setPaymentMethod('cod')}
        >
          Cash on Delievery
        </button>
        
        <button style={styles.payBtn}>Pay: ${total.toFixed(2)}</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '2rem',
    gap: '2rem'
  },
  orderSummary: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: '2rem',
    borderRadius: '12px'
  },
  address: {
    marginTop: '2rem',
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    borderRadius: '8px'
  },
  paymentSection: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: '2rem',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  paymentBtn: {
    padding: '1rem',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  payBtn: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  }
};

export default Checkout;
