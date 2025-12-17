import React, { useEffect, useState } from "react";
import { getMenuByRestaurant } from "../services/api";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Menu = ({ restaurantId }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [toast, setToast] = useState(null);
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
    setToast(`${item.name} added to cart!`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div style={styles.container}>
      {/* Animated Background Orbs */}
      <div style={styles.backgroundOrbs}>
        <div style={{...styles.orb, ...styles.orb1}}></div>
        <div style={{...styles.orb, ...styles.orb2}}></div>
        <div style={{...styles.orb, ...styles.orb3}}></div>
      </div>
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
      
      {/* Toast Notification */}
      {toast && (
        <div style={styles.toast}>
          ✅ {toast}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)",
    position: "relative",
    overflow: "hidden",
  },
  backgroundOrbs: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
  },
  orb: {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(60px)",
    opacity: 0.15,
  },
  orb1: {
    top: "10%",
    left: "10%",
    width: "300px",
    height: "300px",
    background: "#00d4ff",
    animation: "float 6s ease-in-out infinite",
  },
  orb2: {
    top: "50%",
    right: "10%",
    width: "400px",
    height: "400px",
    background: "#8b5cf6",
    animation: "float 8s ease-in-out infinite",
    animationDelay: "2s",
  },
  orb3: {
    bottom: "10%",
    left: "40%",
    width: "350px",
    height: "350px",
    background: "#f472b6",
    animation: "float 7s ease-in-out infinite",
    animationDelay: "4s",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontSize: "2rem",
    color: "white",
    background: "linear-gradient(to right, #00d4ff, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  cartBtn: {
    padding: "0.8rem 1.8rem",
    background: "linear-gradient(to right, #00d4ff, #8b5cf6)",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
    transition: "all 0.3s ease",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
    position: "relative",
    zIndex: 1,
  },
  card: {
    background: "rgba(26, 26, 26, 0.6)",
    backdropFilter: "blur(10px)",
    padding: "1.5rem",
    borderRadius: "15px",
    border: "1px solid rgba(0, 212, 255, 0.3)",
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.1)",
    transition: "all 0.3s ease",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    marginBottom: "0.8rem",
  },
  itemName: {
    fontSize: "1.3rem",
    color: "#fff",
    margin: 0,
  },
  category: {
    backgroundColor: "rgba(0, 212, 255, 0.1)",
    border: "1px solid rgba(0, 212, 255, 0.3)",
    padding: "0.3rem 0.8rem",
    borderRadius: "15px",
    fontSize: "0.8rem",
    color: "#00d4ff",
  },
  description: {
    color: "#9ca3af",
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
    color: "#00d4ff",
    margin: 0,
  },
  backBtn: {
    padding: "0.8rem 1.8rem",
    backgroundColor: "rgba(26, 26, 26, 0.8)",
    color: "#00d4ff",
    border: "1px solid rgba(0, 212, 255, 0.3)",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "0.7rem 1.5rem",
    background: "linear-gradient(to right, #8b5cf6, #f472b6)",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
  toast: {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "rgba(16, 185, 129, 0.9)",
    backdropFilter: "blur(10px)",
    color: "white",
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    border: "1px solid rgba(16, 185, 129, 0.5)",
    boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
    zIndex: 1000,
    animation: "slideIn 0.3s ease-out",
  },
};

export default Menu;
