const mongoose = require('mongoose');

const HackerNewsDeleted = mongoose.model('HackerNewsDeleted', {
    objectID: String,
    userId: String
});

module.exports = HackerNewsDeleted;