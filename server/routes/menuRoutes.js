const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");
const mongoose = require('mongoose');

// GET /api/menu  → all items (optional, useful for testing)
router.get("/", async (req, res) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (err) {
    console.error("Error in GET /api/menu:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/menu/:restaurantId  → items for one restaurant
router.get('/:restaurantId', async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId.trim(); // remove \n etc

    const items = await Menu.find({
      restaurantId: new mongoose.Types.ObjectId(restaurantId)
    });

    res.json(items);
  } catch (err) {
    console.error('Error in GET /api/menu/:restaurantId:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// POST /api/menu  → add single or multiple items
router.post("/", async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const menuItems = await Menu.insertMany(req.body);
      return res.status(201).json(menuItems);
    }

    const menuItem = new Menu(req.body);
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (err) {
    console.error("Error in POST /api/menu:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
