import React, { useState } from 'react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const subtotal = 25.00;
  const deliveryFee = 2.99;
  const tax = 2.01;
  const total = 30.00;

  const goToPayment = () => {
    window.location = '/payment';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
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
              <div className="flex justify-between text-white">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-white border-opacity-30 pt-4">
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
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
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
              className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
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
