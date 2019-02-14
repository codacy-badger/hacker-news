const functions = require('firebase-functions');
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

mongoose.connect('mongodb://ealiaga:EvrEvrEvr@cluster0-shard-00-00-6zdiu.gcp.mongodb.net:27017,cluster0-shard-00-01-6zdiu.gcp.mongodb.net:27017,cluster0-shard-00-02-6zdiu.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true });

const app = express();

const HackerNews = require('./models/HackerNews');

const createServer = () => {
    app.get('/hacker-news/external', async(req, res) => {
        const { data }   = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');

        res.send(data)
    })

    app.get('/hacker-news', async(req, res) => {
        const result = await HackerNews.find({}).exec();

        res.send(result)
    })

    app.get('/hacker-news/:id/delete', (req, res) => {
        const { id } = req.params;
        
        res.send(result)
    })

    return app;
}

exports.api = functions.https.onRequest(createServer());

