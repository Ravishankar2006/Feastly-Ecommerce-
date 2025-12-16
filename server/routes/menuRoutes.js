const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// all items (optional)
router.get('/', async (req, res) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// items for one restaurant
router.get('/:restaurantId', async (req, res) => {
  try {
    const items = await Menu.find({ restaurantId: req.params.restaurantId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
