const functions = require('firebase-functions');
const express = require('express');
const { HackerNewsHandler } = require('./src/hacker-news')
const mongoose = require('mongoose');
const axios = require('axios');

mongoose.connect('mongodb://ealiaga:EvrEvrEvr@cluster0-shard-00-00-6zdiu.gcp.mongodb.net:27017,cluster0-shard-00-01-6zdiu.gcp.mongodb.net:27017,cluster0-shard-00-02-6zdiu.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true });

const app = express();

const hackerNewsHandler = HackerNewsHandler({ axios });

const createServer = () => {
    app.get('/hacker-news/external', hackerNewsHandler.getExternal )
    app.get('/hacker-news', hackerNewsHandler.get )
    app.get('/hacker-news/:id/delete', hackerNewsHandler.delete)
    return app;
}

exports.api = functions.https.onRequest(createServer());

