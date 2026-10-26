const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Step 3: Define routes
app.get("/", (req, res) => {
    res.send("hy, ammayi!");
});

app.get("/hello", (req, res) => {
    res.send("ara,avide");
});

app.get("/api/users", (req, res) => {
    res.json({ success: true, data: [{ id:1 , name: "alice" }] });
});

// Step 4: Handle POST, PUT, and DELETE requests
app.post("/api/users", (req, res) => {
    const newUser = req.body;
    res.status(201).json({ success: true, message: "user created", data: newUser });
});

app.put("/api/users/:id", (req, res) => {
    const { id } = req.params;
    res.json({ success: true, message: `user ${id} updated` });
});

app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    res.json({ success: true, message: `user ${id} deleted` });
});

// Listen on a specific port
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});