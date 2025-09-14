const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    hackathonId: {
        type: String, // changed from ObjectId to String
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    teamMembers: {
        type: String,
        default: ''
    },
    college: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    registeredAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Member', memberSchema);
