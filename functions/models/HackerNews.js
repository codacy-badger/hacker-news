const mongoose = require('mongoose');

const HackerNews = mongoose.model('HackerNews', {
    objectID: String,
    title: String,
    author: String,
    url: String,
    createdAt: Date
});

module.exports = HackerNews;