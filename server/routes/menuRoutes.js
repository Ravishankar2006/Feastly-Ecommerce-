const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// Get menu by restaurant ID
router.get('/restaurant/:restaurantId', async (req, res) => {
  try {
    const menuItems = await Menu.find({ restaurantId: req.params.restaurantId });
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create menu item
router.post('/', async (req, res) => {
  try {
    // Check if it's an array (bulk insert) or single object
    if (Array.isArray(req.body)) {
      // Bulk insert
      const menuItems = await Menu.insertMany(req.body);
      res.status(201).json(menuItems);
    } else {
      // Single insert
      const menuItem = new Menu(req.body);
      await menuItem.save();
      res.status(201).json(menuItem);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
