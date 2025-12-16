import React, { useState } from 'react';

const SearchBar = ({ onSearch, searchValue, restaurants = [] }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue);
      setShowSuggestions(false);
    }
  };

  const handleFilterClick = (filter) => {
    const filterText = filter.split(' ')[1]; // Remove emoji
    onSearch(filterText);
    setShowSuggestions(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => setShowSuggestions(false), 200);
  };

  // Get search suggestions based on current input
  const getSuggestions = () => {
    if (!searchValue.trim() || !restaurants.length) return [];
    
    const query = searchValue.toLowerCase();
    const suggestions = new Set();
    
    restaurants.forEach(restaurant => {
      if (restaurant.name.toLowerCase().includes(query)) {
        suggestions.add(restaurant.name);
      }
      if (restaurant.cuisine && restaurant.cuisine.toLowerCase().includes(query)) {
        suggestions.add(restaurant.cuisine);
      }
    });
    
    return Array.from(suggestions).slice(0, 5);
  };

  const suggestions = getSuggestions();

  return (
    <div className="max-w-2xl mx-auto px-6">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`relative bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
          isFocused ? 'ring-4 ring-blue-300 ring-opacity-50 scale-105' : 'hover:shadow-3xl'
        }`}>
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <svg 
              className="h-6 w-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for restaurants, cuisines, or dishes..."
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full pl-14 pr-16 py-5 text-lg text-gray-700 placeholder-gray-400 bg-transparent rounded-2xl focus:outline-none"
          />
          {searchValue && (
            <button
              type="button"
              onClick={() => onSearch('')}
              className="absolute inset-y-0 right-16 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Search Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-10">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  onSearch(suggestion);
                  setShowSuggestions(false);
                }}
                className="w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3"
              >
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>{suggestion}</span>
              </button>
            ))}
          </div>
        )}

      </form>
    </div>
  );
};

export default SearchBar;
