const express = require("express");
const userRoutes = require('./routes/userRoutes');

const app = express();

// Mount user routes at /api/users prefix
app.get("/", (req, res) => {
    res.send("ajithe,anne njan thattum");
});
app.use("/api/users",userRoutes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});