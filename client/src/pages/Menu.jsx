import React, { useEffect, useState } from "react";
import { getMenuByRestaurant } from "../services/api";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Menu = ({ restaurantId }) => {
  const [menuItems, setMenuItems] = useState([]);
  const { addToCart, cart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await getMenuByRestaurant(restaurantId);
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenuItems();
  }, [restaurantId]);

  const handleAddToCart = (item) => {
    addToCart(item);
    // Visual feedback
    alert("✅ Added to cart!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={() => navigate("/")} style={styles.backBtn}>
          ← Back to Home
        </button>
        <h2 style={styles.title}>🍽️ Menu</h2>
        <button onClick={() => navigate("/cart")} style={styles.cartBtn}>
          🛒 Cart ({cart.length})
        </button>
      </div>
      <div style={styles.grid}>
        {menuItems.map((item) => (
          <div key={item._id} style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.itemName}>{item.name}</h3>
              <span style={styles.category}>{item.category}</span>
            </div>
            <p style={styles.description}>{item.description}</p>
            <div style={styles.footer}>
              <p style={styles.price}>₹{item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                style={styles.button}
              >
                + Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2rem",
    color: "white",
  },
  cartBtn: {
    padding: "0.8rem 1.8rem",
    backgroundColor: "#fff",
    color: "#667eea",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "translateY(-5px)",
    },
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    marginBottom: "0.8rem",
  },
  itemName: {
    fontSize: "1.3rem",
    color: "#333",
    margin: 0,
  },
  category: {
    backgroundColor: "#f0f0f0",
    padding: "0.3rem 0.8rem",
    borderRadius: "15px",
    fontSize: "0.8rem",
    color: "#666",
  },
  description: {
    color: "#666",
    marginBottom: "1rem",
    fontSize: "0.95rem",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#ff6347",
    margin: 0,
  },
    backBtn: {
    padding: '0.8rem 1.8rem',
    backgroundColor: '#fff',
    color: '#667eea',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
  },
  button: {
    padding: "0.7rem 1.5rem",
    backgroundColor: "#ff6347",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default Menu;
