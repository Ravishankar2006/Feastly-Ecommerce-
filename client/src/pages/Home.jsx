import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import RestaurantCard from '../components/RestaurantCard';
import { getRestaurants } from '../services/api';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  // Debounce search query
  useEffect(() => {
    if (searchQuery !== debouncedQuery) {
      setIsSearching(true);
    }
    
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, debouncedQuery]);

  useEffect(() => {
    filterRestaurants();
  }, [restaurants, debouncedQuery]);

  const fetchRestaurants = async () => {
    try {
      const data = await getRestaurants();
      setRestaurants(data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterRestaurants = useCallback(() => {
    if (!debouncedQuery.trim()) {
      setFilteredRestaurants(restaurants);
      return;
    }

    const filtered = restaurants.filter(restaurant => {
      const query = debouncedQuery.toLowerCase();
      return (
        restaurant.name.toLowerCase().includes(query) ||
        (restaurant.cuisine && restaurant.cuisine.toLowerCase().includes(query)) ||
        (restaurant.description && restaurant.description.toLowerCase().includes(query)) ||
        (restaurant.category && restaurant.category.toLowerCase().includes(query)) ||
        (restaurant.location && restaurant.location.toLowerCase().includes(query))
      );
    });
    
    setFilteredRestaurants(filtered);
  }, [restaurants, debouncedQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Feastly
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              🌎 Multiverse's No 1 Food Delivery App
            </p>

          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative -mt-8 z-10">
        <SearchBar onSearch={handleSearch} searchValue={searchQuery} restaurants={restaurants} />
      </div>
      
      {/* Restaurants Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {debouncedQuery ? `🔍 Search Results` : `✨ Featured Restaurants`}
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            {debouncedQuery 
              ? `Showing results for "${debouncedQuery}"`
              : 'Discover amazing restaurants and satisfy your cravings with just a few clicks'
            }
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white bg-opacity-20 rounded-2xl h-80"></div>
              </div>
            ))}
          </div>
        ) : filteredRestaurants.length > 0 ? (
          <>
            {debouncedQuery && (
              <div className="text-center mb-8">
                {isSearching ? (
                  <div className="flex items-center justify-center space-x-2 text-white text-lg">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  <>
                    <p className="text-white text-lg">
                      Found {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} for "{debouncedQuery}"
                    </p>
                    <button 
                      onClick={() => handleSearch('')}
                      className="mt-2 text-blue-200 hover:text-white underline transition-colors duration-200"
                    >
                      Clear search
                    </button>
                  </>
                )}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-slide-up">
              {filteredRestaurants.map((restaurant, index) => (
                <div 
                  key={restaurant._id} 
                  className="animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <RestaurantCard 
                    id={restaurant._id}
                    name={restaurant.name} 
                    rating={restaurant.rating} 
                    deliveryTime={restaurant.deliveryTime}
                    image={restaurant.image}
                  />
                </div>
              ))}
            </div>
          </>
        ) : debouncedQuery ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No results found for "{debouncedQuery}"
            </h3>
            <p className="text-blue-100 text-lg mb-4">
              Try searching for something else or browse all restaurants
            </p>
            <button 
              onClick={() => handleSearch('')}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105 border border-white border-opacity-30"
            >
              Show all restaurants
            </button>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No restaurants available yet
            </h3>
            <p className="text-blue-100 text-lg">
              Check back soon for amazing dining options!
            </p>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Feastly?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-blue-100">Get your food delivered in 30 minutes or less</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎆</div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
              <p className="text-blue-100">Only the finest restaurants and freshest ingredients</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy Ordering</h3>
              <p className="text-blue-100">Simple, intuitive interface for seamless ordering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
