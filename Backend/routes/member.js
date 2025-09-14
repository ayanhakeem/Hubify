// routes/member.js
const express = require('express');
const router = express.Router();
const MemberModel = require('../Model/MemberModel');

// POST /api/members/register
router.post('/register', async (req, res) => {
  try {
    const { hackathonId, name, email, teamMembers, college, city, state } = req.body;

    const member = new MemberModel({
      hackathonId,
      name,
      email,
      teamMembers,
      college,
      city,
      state
    });

    await member.save();

    res.status(201).json({ message: 'Registration successful', member });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all hackathons a user has registered for
router.get('/user/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const registrations = await MemberModel.find({ email });
    res.json({ registrations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
