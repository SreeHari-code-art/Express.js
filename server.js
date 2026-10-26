// step: 1 import express
const express = require("express");

// step: 2 initialize express application
const app = express();
const PORT = process.env.PORT || 3000;

// step: 3 define a basic route
app.get("/", (req, res) => {
    res.send("hy, ammayi!");
});

app.get("/hello", (req, res) => {
    res.send("ara,avide");
});

// step: 4 listen on a specific port
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});