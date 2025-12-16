import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      alert('Payment successful! Order placed.');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Payment</h1>
          
          {/* Payment Methods */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-semibold mb-4">Payment Method</h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  paymentMethod === 'card' 
                    ? 'border-blue-400 bg-blue-500 bg-opacity-20' 
                    : 'border-white border-opacity-30 bg-white bg-opacity-10'
                }`}
              >
                <div className="text-2xl mb-2">💳</div>
                <div className="text-white text-sm">Card</div>
              </button>
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  paymentMethod === 'paypal' 
                    ? 'border-blue-400 bg-blue-500 bg-opacity-20' 
                    : 'border-white border-opacity-30 bg-white bg-opacity-10'
                }`}
              >
                <div className="text-2xl mb-2">🅿️</div>
                <div className="text-white text-sm">PayPal</div>
              </button>
              <button
                onClick={() => setPaymentMethod('cash')}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  paymentMethod === 'cash' 
                    ? 'border-blue-400 bg-blue-500 bg-opacity-20' 
                    : 'border-white border-opacity-30 bg-white bg-opacity-10'
                }`}
              >
                <div className="text-2xl mb-2">💵</div>
                <div className="text-white text-sm">Cash</div>
              </button>
            </div>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  placeholder="John Doe"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processing...
                  </>
                ) : (
                  'Pay Now'
                )}
              </button>
            </form>
          )}

          {/* Other Payment Methods */}
          {paymentMethod !== 'card' && (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">
                {paymentMethod === 'paypal' ? '🅿️' : '💵'}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {paymentMethod === 'paypal' ? 'PayPal Payment' : 'Cash on Delivery'}
              </h3>
              <p className="text-blue-100 mb-6">
                {paymentMethod === 'paypal' 
                  ? 'You will be redirected to PayPal to complete your payment.'
                  : 'Pay with cash when your order arrives.'
                }
              </p>
              <button
                onClick={handlePayment}
                disabled={loading}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Confirm Order'}
              </button>
            </div>
          )}

          {/* Order Summary */}
          <div className="mt-8 pt-6 border-t border-white border-opacity-20">
            <h3 className="text-white text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 text-white">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$24.99</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$2.99</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-white border-opacity-20">
                <span>Total</span>
                <span>$27.98</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;