const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');
const members = require('./Members');
// const logger = require("./middleware/logger");

const app = express();

// Body Parser Middleware
app.use(express.json());

// To handle the form data
app.use(express.urlencoded({ extended: false }));

// Setting view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Homepage Route
app.get('/', (req, res) => {
    res.render('index', { title: 'Member App', members });
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

// // Init middleware
// app.use(logger);

// For Listening Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}...`);
});
