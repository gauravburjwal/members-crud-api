const express = require("express");
const path = require("path");
const members = require("./Members");
const logger = require("./middleware/logger");

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Init middleware
app.use(logger);

// API Endpoints

// GET all members information
app.get("/api/members", (req, res) => {
    res.json(members);
});

// GET single member
app.get("/api/members/:id", (req, res) => {
    // console.log(req.params.id);
    const found = members.some((member) => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter((member) => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}` });
    }
});

// For Listening Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}...`);
});
