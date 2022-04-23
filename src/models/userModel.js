const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('User4', userSchema)
