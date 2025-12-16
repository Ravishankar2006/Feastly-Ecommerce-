const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

router.get('/:restaurantId', async (req, res) => {
  try {
    const items = await Menu.find({ restaurantId: req.params.restaurantId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const menuItems = await Menu.insertMany(req.body);
      return res.status(201).json(menuItems);
    }
    const menuItem = new Menu(req.body);
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
