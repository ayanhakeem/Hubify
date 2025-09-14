const express = require('express');
const router = express.Router();
const verifyAdmin = require('../middleware/verifyAdmin');

// Example admin route to upload events
router.post('/upload-event', verifyAdmin, (req, res) => {
    // Logic to upload event
    res.json({ message: 'Event uploaded successfully by admin!' });
});

module.exports = router;
