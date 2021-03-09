const express = require('express');
const path = require('path');
const members = require('./Members');

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoints - GET all members information
app.get('/api/members', (req, res) => {
    res.json(members);
})

// For Listening Server 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}...`);
});