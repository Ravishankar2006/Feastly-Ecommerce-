import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ id, name, image, rating, deliveryTime }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div style={styles.card} onClick={handleClick}>
      <div style={styles.image}>
        {image ? (
          <img 
            src={image} 
            alt={name} 
            style={styles.img}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '🍕';
            }}
          />
        ) : (
          <span style={styles.emoji}>🍕</span>
        )}
      </div>
      <div style={styles.content}>
        <h3 style={styles.name}>{name}</h3>
        <div style={styles.info}>
          <span style={styles.badge}>⭐ {rating}</span>
          <span style={styles.badge}>🕐 {deliveryTime}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
    }
  },
  image: {
    width: '100%',
    height: '180px',
    background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  emoji: {
    fontSize: '4rem'
  },
  content: {
    padding: '1.2rem'
  },
  name: {
    fontSize: '1.3rem',
    marginBottom: '0.8rem',
    color: '#333'
  },
  info: {
    display: 'flex',
    gap: '1rem'
  },
  badge: {
    backgroundColor: '#f0f0f0',
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#666'
  }
};

export default RestaurantCard;
