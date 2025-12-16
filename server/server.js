const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS
app.use(cors()); // allows all origins; for prod you can restrict

app.use(express.json());

// MongoDB Connection
// For local dev, fallback to your localhost DB.
// For Render, set MONGO_URI in environment variables.
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/feastly';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Health check
app.get('/', (req, res) => {
  res.send('Backend is alive');
});

// Import Routes
const restaurantRoutes = require('./routes/restaurantRoutes');
const menuRoutes = require('./routes/menuRoutes');
const userRoutes = require('./routes/userRoutes');

// Use Routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/users', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
