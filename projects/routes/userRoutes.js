const express = require("express");
const router = express.Router(); // Fixed: Router must be capitalized

router.get("/", (req, res) => {
    res.json({ message: "fetch all users" }); // Optional: fixed typo 'messege' to 'message'
});

router.get("/:id", (req, res) => {
    res.json({ message: `fetch user ${req.params.id}` });
});

module.exports = router;