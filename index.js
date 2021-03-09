const express = require('express');
const path = require('path');
const moment = require('moment');
const members = require('./Members');

const app = express();

// Middleware - Logger
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format('Do MMMM YYYY, h:mm:ss a')}`);
    next();
};

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Init middleware
app.use(logger);

// API Endpoints - GET all members information
app.get('/api/members', (req, res) => {
    res.json(members);
})

// For Listening Server 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}...`);
});