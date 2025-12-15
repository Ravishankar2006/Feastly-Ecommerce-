import React from 'react';

const Profile = () => {
  return (
    <div style={styles.container}>
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
    padding: '2rem'
  },
  profilePic: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#d3d3d3',
    margin: '2rem auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem'
  },
  menu: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#e0e0e0',
    padding: '2rem',
    borderRadius: '12px'
  },
  section: {
    backgroundColor: '#ff6347',
    padding: '1.5rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    color: 'black'
  }
};

export default Profile;
