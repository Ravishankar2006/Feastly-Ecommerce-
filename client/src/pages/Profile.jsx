import React from 'react';

const Profile = () => {
  return (
    <div style={styles.container}>
      {/* Animated Background Particles */}
      <div style={styles.backgroundEffect}>
        <div style={{...styles.floatingOrb, top: '5%', left: '5%', background: '#00d4ff', animationDelay: '0s'}}></div>
        <div style={{...styles.floatingOrb, top: '60%', right: '10%', background: '#8b5cf6', animationDelay: '2s'}}></div>
        <div style={{...styles.floatingOrb, bottom: '10%', left: '50%', background: '#f472b6', animationDelay: '4s'}}></div>
      </div>
      <div style={styles.profilePic}>
        Profile Pic
      </div>

      <div style={styles.menu}>
        <h2>Following</h2>
        
        <div style={styles.section}>
          <h3>Recently Viewed</h3>
          <p>Your recently viewed restaurants</p>
        </div>

        <div style={styles.section}>
          <h3>My adresses</h3>
          <p>16A Main street, Thoothukudi</p>
        </div>

        <div style={styles.section}>
          <h3>Payment</h3>
          <p>Saved payment methods</p>
        </div>

        <div style={styles.section}>
          <h3>Your Bookings</h3>
          <p>Order history</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
    position: 'relative',
    overflow: 'hidden'
  },
  backgroundEffect: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 0
  },
  floatingOrb: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.12,
    animation: 'float 8s ease-in-out infinite'
  },
  profilePic: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)',
    margin: '2rem auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    color: 'white',
    fontWeight: 'bold',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)'
  },
  menu: {
    maxWidth: '800px',
    margin: '0 auto',
    background: 'rgba(26, 26, 26, 0.6)',
    backdropFilter: 'blur(10px)',
    padding: '2rem',
    borderRadius: '20px',
    border: '1px solid rgba(0, 212, 255, 0.3)',
    boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)',
    position: 'relative',
    zIndex: 1,
    color: 'white'
  },
  section: {
    background: 'rgba(26, 26, 26, 0.6)',
    backdropFilter: 'blur(10px)',
    padding: '1.5rem',
    marginBottom: '1rem',
    borderRadius: '12px',
    color: 'white',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }
};

export default Profile;
