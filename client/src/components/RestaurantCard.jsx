import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ id, name, image, rating, deliveryTime }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${id}`);
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-green-600 bg-green-100';
    if (rating >= 4.0) return 'text-blue-600 bg-blue-100';
    if (rating >= 3.5) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div 
      className="card group cursor-pointer bg-[#1a1a1a]/60 backdrop-blur-xl rounded-2xl overflow-hidden transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 border border-[#00d4ff]/30 hover:border-[#00d4ff]/80 relative"
      style={{
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 212, 255, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)';
        e.currentTarget.style.transform = 'translateY(-12px) scale(1.05) rotateX(2deg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.1)';
        e.currentTarget.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
      }}
      onClick={handleClick}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
      </div>
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 overflow-hidden group-hover:animate-gradient-shift" style={{backgroundSize: '200% 200%'}}>
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-6xl">🍕</div>';
            }}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-6xl group-hover:scale-110 transition-transform duration-300">
            🍕
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00d4ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Rating badge */}
        <div className="absolute top-3 right-3">
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getRatingColor(rating)} backdrop-blur-sm`}>
            ⭐ {rating || '4.5'}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-200">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-gray-300">{deliveryTime || '30-45 min'}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-[#10b981]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Free delivery</span>
          </div>
        </div>
        
        {/* Action button */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 border border-[#00d4ff]/30 hover:shadow-neon">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
