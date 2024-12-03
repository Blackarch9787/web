const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    username: String,
    score: Number,
});

module.exports = mongoose.model('Marks', marksSchema);
