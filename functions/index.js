const functions = require('firebase-functions');
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const schedule = require('node-schedule');
const cors = require('cors');
const { DatabaseConfig } = require('./src/database');
const { 
    HackerNewsRouter, 
    HackerNews, 
    HackerNewsProxyService, 
    HackerNewsService, 
    HackerNewsScheduleService, 
    HackerNewsDatabaseService,
    HackerNewsDeleted,
    HackerNewsDeletedDatabaseService
} = require('./src/hacker-news')


const app = express();
app.use( cors({ origin: true }) );

const databaseConfig = DatabaseConfig({ mongoose });
databaseConfig.connect();

const hackerNewsDeletedDatabaseService = HackerNewsDeletedDatabaseService({ HackerNewsDeleted });
const hackerNewsDatabaseService = HackerNewsDatabaseService({ HackerNews });
const hackerNewsRouter = HackerNewsRouter({ hackerNewsDatabaseService, hackerNewsDeletedDatabaseService });
const hackerNewsProxyService = HackerNewsProxyService({ axios });
const hackerNewsService = HackerNewsService({ hackerNewsProxyService, hackerNewsDatabaseService });
const hackerNewsScheduleService = HackerNewsScheduleService({ schedule, hackerNewsService });

hackerNewsScheduleService.getDataNow();
hackerNewsScheduleService.getDataEveryHour();

const createServer = () => {
    app.get('/hacker-news/:token', hackerNewsRouter.get )
    app.get('/hacker-news/:token/delete/:id', hackerNewsRouter.delete)
    return app;
}

exports.api = functions.https.onRequest(createServer());

