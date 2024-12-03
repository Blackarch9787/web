const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String, // In production, hash passwords for security
});

module.exports = mongoose.model('User', userSchema);
