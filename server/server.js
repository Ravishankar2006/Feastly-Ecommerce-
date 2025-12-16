const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: 'https://feastly-ecommerce-nwo3pd6um-ravishankars-projects-3f7c31df.vercel.app', // Replace with YOUR Vercel URL
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/feastly')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Import Routes
const restaurantRoutes = require('./routes/restaurantRoutes');
const menuRoutes = require('./routes/menuRoutes');
const userRoutes = require('./routes/userRoutes');

// Use Routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/users', userRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
