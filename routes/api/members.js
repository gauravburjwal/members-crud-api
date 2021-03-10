const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const members = require("../../Members");
const logger = require("../../middleware/logger");

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

// POST a member
router.post("/", (req, res) => {
    // res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active",
    };

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: "Please include a name and email" });
    }

    members.push(newMember);
    res.json({ msg: "Member added", members });
    // res.redirect('/');
});

// PUT - Update a member by ID
router.put("/:id", (req, res) => {
    const found = members.some((member) => member.id === parseInt(req.params.id));

    if (found) {
        const updtMember = req.body;
        members.forEach((member) => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updtMember.name ? updtMember.name : member.name;
                member.email = updtMember.email ? updtMember.email : member.email;

                res.json({ msg: "Member updated", member });
            }
        });
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}` });
    }
});

// DELETE - Delete a member by ID
router.delete("/:id", (req, res) => {
    const found = members.some((member) => member.id === parseInt(req.params.id));

    if (found) {
        res.json({
            msg: "Member deleted",
            members: members.filter(
                (member) => member.id !== parseInt(req.params.id)
            ),
        });
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}` });
    }
});

module.exports = router;