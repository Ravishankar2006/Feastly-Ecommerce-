import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>🍔 About Feastly</h1>
        <p style={styles.subtitle}>Delivering happiness, one meal at a time</p>
      </div>

      <div style={styles.aboutContent}>
        <div style={styles.infoCard}>
          <span style={styles.emoji}>🚀</span>
          <h3 style={styles.cardTitle}>Fast Delivery</h3>
          <p style={styles.cardText}>
            Feastly is your go-to food delivery platform bringing delicious meals from your favorite restaurants right to your doorstep.
          </p>
        </div>
        <div style={styles.infoCard}>
          <span style={styles.emoji}>🍕</span>
          <h3 style={styles.cardTitle}>Best Quality</h3>
          <p style={styles.cardText}>
            We partner with top-rated restaurants to ensure you get fresh, high-quality food every time.
          </p>
        </div>
        <div style={styles.infoCard}>
          <span style={styles.emoji}>💰</span>
          <h3 style={styles.cardTitle}>Great Prices</h3>
          <p style={styles.cardText}>
            Enjoy competitive pricing and exclusive deals on your favorite dishes.
          </p>
        </div>
      </div>

      <h2 style={styles.reviewTitle}>⭐ Customer Reviews</h2>
      <div style={styles.reviewGrid}>
        <div style={styles.reviewCard}>
          <div style={styles.avatar}>👨‍🍳</div>
          <h3 style={styles.reviewName}>Beerus</h3>
          <p style={styles.stars}>⭐⭐⭐⭐⭐</p>
          <p style={styles.reviewText}>"Amazing service! Food arrived hot and fresh."</p>
        </div>
        <div style={styles.reviewCard}>
          <div style={styles.avatar}>👨‍💼</div>
          <h3 style={styles.reviewName}>Whis</h3>
          <p style={styles.stars}>⭐⭐⭐⭐⭐</p>
          <p style={styles.reviewText}>"Love the variety of restaurants available!"</p>
        </div>
        <div style={styles.reviewCard}>
          <div style={styles.avatar}>🥋</div>
          <h3 style={styles.reviewName}>Goku</h3>
          <p style={styles.stars}>⭐⭐⭐⭐</p>
          <p style={styles.reviewText}>"Great app! Super easy to use and fast delivery."</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '2rem'
  },
  hero: {
    textAlign: 'center',
    padding: '3rem 0',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '3.5rem',
    color: 'white',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
  },
  subtitle: {
    fontSize: '1.5rem',
    color: 'white',
    opacity: 0.9
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto 4rem',
    padding: '2rem'
  },
  infoCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-10px)'
    }
  },
  emoji: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '1rem'
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '1rem'
  },
  cardText: {
    color: '#666',
    fontSize: '1rem',
    lineHeight: '1.6'
  },
  reviewTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: 'white',
    marginBottom: '2rem'
  },
  reviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem 2rem'
  },
  reviewCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ff6347, #ff8c42)',
    margin: '0 auto 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  reviewName: {
    fontSize: '1.3rem',
    color: '#333',
    marginBottom: '0.5rem'
  },
  stars: {
    fontSize: '1.3rem',
    margin: '0.5rem 0'
  },
  reviewText: {
    color: '#666',
    fontSize: '1rem',
    lineHeight: '1.5',
    fontStyle: 'italic'
  }
};

export default About;
