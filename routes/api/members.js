const express = require('express');
const router = express.Router();
const members = require("../../Members");
const logger = require('../../middleware/logger')

// Init middleware
router.use(logger);

// API Endpoints

// GET all members information
router.get("/", (req, res) => {
    res.json(members);
});

// GET single member
router.get("/:id", (req, res) => {
    // console.log(req.params.id);
    const found = members.some((member) => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter((member) => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}` });
    }
});

module.exports = router;