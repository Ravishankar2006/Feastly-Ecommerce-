import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { getTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const subtotal = parseFloat(getTotal());
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  const goToPayment = () => {
    window.location = '/payment';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a] py-12 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4ff]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#f472b6]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-[#00d4ff]/20">
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-white">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-white border-opacity-30 pt-4 mt-4">
                <div className="flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white bg-opacity-10 rounded-xl p-4 mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Delivery Address</h3>
              <p className="text-blue-100">16A Main Street</p>
              <p className="text-blue-100">Thoothukudi, Tamil Nadu</p>
              <button className="text-blue-200 hover:text-white text-sm mt-2 underline">
                Change Address
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-[#00d4ff]/20">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
            
            <div className="space-y-4 mb-8">
              <div 
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  paymentMethod === 'card' 
                    ? 'border-blue-400 bg-blue-500 bg-opacity-20' 
                    : 'border-white border-opacity-30 bg-white bg-opacity-10 hover:bg-opacity-20'
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">💳</div>
                  <div>
                    <div className="text-white font-semibold">Credit/Debit Card</div>
                    <div className="text-blue-200 text-sm">Visa, Mastercard, Amex</div>
                  </div>
                </div>
              </div>
              
              <div 
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  paymentMethod === 'paypal' 
                    ? 'border-blue-400 bg-blue-500 bg-opacity-20' 
                    : 'border-white border-opacity-30 bg-white bg-opacity-10 hover:bg-opacity-20'
                }`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🅿️</div>
                  <div>
                    <div className="text-white font-semibold">PayPal</div>
                    <div className="text-blue-200 text-sm">Pay with your PayPal account</div>
                  </div>
                </div>
              </div>
              
              <div 
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  paymentMethod === 'cod' 
                    ? 'border-blue-400 bg-blue-500 bg-opacity-20' 
                    : 'border-white border-opacity-30 bg-white bg-opacity-10 hover:bg-opacity-20'
                }`}
                onClick={() => setPaymentMethod('cod')}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">💵</div>
                  <div>
                    <div className="text-white font-semibold">Cash on Delivery</div>
                    <div className="text-blue-200 text-sm">Pay when your order arrives</div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={goToPayment}
              className="w-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-neon transform hover:-translate-y-1 transition-all duration-300 text-lg border border-[#00d4ff]/30"
            >
              Proceed to Payment - ${total.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
