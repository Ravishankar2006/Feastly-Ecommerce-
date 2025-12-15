import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import RestaurantCard from '../components/RestaurantCard';
import { getRestaurants } from '../services/api';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await getRestaurants();
      setRestaurants(data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome to Feastly</h1>
        <p style={styles.subtitle}>🌎 Multiverse's No 1 Food Delivery App</p>
      </div>
      <SearchBar />
      
      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>✨ Suggestions</h2>
        <div style={styles.grid}>
          {restaurants.length > 0 ? (
            restaurants.map(restaurant => (
              <RestaurantCard 
                key={restaurant._id}
                id={restaurant._id}
                name={restaurant.name} 
                rating={restaurant.rating} 
                deliveryTime={restaurant.deliveryTime}
                image={restaurant.image}
              />
            ))
          ) : (
            <p style={styles.empty}>No restaurants available. Add some from backend!</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  hero: {
    textAlign: 'center',
    padding: '3rem 1rem',
    color: 'white'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    animation: 'fadeIn 1s ease-in'
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.9
  },
  content: {
    padding: '0 2rem 2rem 2rem'
  },
  sectionTitle: {
    color: 'white',
    marginBottom: '1.5rem',
    fontSize: '1.8rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem'
  },
  empty: {
    color: 'white',
    fontSize: '1.1rem',
    textAlign: 'center',
    gridColumn: '1 / -1'
  }
};

export default Home;
