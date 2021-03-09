const express = require("express");
const path = require("path");
// const logger = require("./middleware/logger");

const app = express();

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
