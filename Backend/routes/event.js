const express = require("express");
const Event = require("../Model/Event");
const authMiddleware = require("../middleware/auth");
const verifyAdmin = require("../middleware/verifyAdmin");
const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name email");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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

// DELETE an event (admin only)
router.delete("/:id", authMiddleware, verifyAdmin, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    await event.deleteOne();
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
