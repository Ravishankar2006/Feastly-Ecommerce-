import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

const OrderTimer = ({ order, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(order.timeRemaining || 0);

  useEffect(() => {
    if (timeLeft <= 0 || order.status === 'delivered') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          onComplete(order.id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, order.id, order.status, onComplete]);

  if (order.status === 'delivered') {
    return <span className="text-green-400 font-semibold">Delivered! 🎉</span>;
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-yellow-400 font-semibold">
      Arriving in: {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};

const Orders = () => {
  const { orders, updateOrderStatus, cancelOrder } = useCart();

  const handleOrderComplete = (orderId) => {
    updateOrderStatus(orderId, 'delivered');
  };

  const handleCancelOrder = (orderId) => {
    if (confirm('Are you sure you want to cancel this order?')) {
      cancelOrder(orderId);
    }
  };

  const handleClearOrder = (orderId) => {
    cancelOrder(orderId);
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 flex items-center justify-center px-6">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white border-opacity-20 text-center">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-white mb-4">No Orders Yet</h2>
          <p className="text-blue-100 mb-6">Start ordering some delicious food!</p>
          <button 
            onClick={() => window.location = '/'}
            className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Browse Restaurants
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Your Orders</h1>
        
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Order #{order.id}</h3>
                  <p className="text-blue-200">{order.date}</p>
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    order.status === 'delivered' ? 'bg-green-500 text-white' :
                    order.status === 'preparing' ? 'bg-yellow-500 text-black' :
                    'bg-blue-500 text-white'
                  }`}>
                    {order.status === 'delivered' ? '✅ Delivered' :
                     order.status === 'preparing' ? '👨‍🍳 Preparing' :
                     '🚚 On the way'}
                  </div>
                  <p className="text-white font-bold text-lg mt-2">${order.total}</p>
                  <div className="mt-2">
                    <OrderTimer order={order} onComplete={handleOrderComplete} />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-white bg-opacity-10 rounded-lg p-3">
                    <div>
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-blue-200 ml-2">x{item.quantity}</span>
                    </div>
                    <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="mt-4 flex justify-end space-x-3">
                {order.status === 'delivered' ? (
                  <button
                    onClick={() => handleClearOrder(order.id)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Clear Order
                  </button>
                ) : (
                  <button
                    onClick={() => handleCancelOrder(order.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Cancel Order
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;