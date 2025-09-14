const express = require("express");
const Event = require("../Model/Event");
const authMiddleware = require("../middleware/auth");
const verifyAdmin = require("../middleware/verifyAdmin");
const router = express.Router();

// Admin creates event
router.post("/", authMiddleware, verifyAdmin, async (req, res) => {
  const { title, description, date, status } = req.body;

  try {
    const event = new Event({
      title,
      description,
      date,
      status,
      createdBy: req.user.userId,
    });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name email");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
