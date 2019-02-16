const functions = require('firebase-functions');
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const schedule = require('node-schedule');
const { DatabaseConfig } = require('./src/database');
const { 
    HackerNewsRouter, 
    HackerNews, 
    HackerNewsProxyService, 
    HackerNewsService, 
    HackerNewsScheduleService, 
    HackerNewsDatabaseService
} = require('./src/hacker-news')


const app = express();

const databaseConfig = DatabaseConfig({ mongoose });
databaseConfig.connect();

const hackerNewsRouter = HackerNewsRouter({ });
const hackerNewsProxyService = HackerNewsProxyService({ axios });
const hackerNewsDatabaseService = HackerNewsDatabaseService({ HackerNews });
const hackerNewsService = HackerNewsService({ hackerNewsProxyService, hackerNewsDatabaseService });
const hackerNewsScheduleService = HackerNewsScheduleService({ schedule, hackerNewsService });

hackerNewsScheduleService.getDataNow();
hackerNewsScheduleService.getDataEveryHour();

const createServer = () => {
    app.get('/hacker-news', hackerNewsRouter.get )
    app.get('/hacker-news/:id/delete', hackerNewsRouter.delete)
    return app;
}

exports.api = functions.https.onRequest(createServer());

