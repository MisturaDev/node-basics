const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

//Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Express Home Page");
});

//About route
app.get("/about", (req, res) => {
    res.send("This is the Express About Page");
});

//API route
app.get("/api", (req, res) => {
    res.json({message: "Hello from Express API"});
});

app.post("/api/profile", (req, res) => {
    const { name, role } = req.body;

    //Validation
    if (!name || !role) {
        return res.status(400).json({ message: "Name and role are required"});
        }
    
        //if data is valid
        res.status(201).json({
        message: "Profile created successfully",
        data: { name, role },
    });
});

//404 route
app.use((req, res) => {
    res.status(404).send("page not found");
});

//Start server
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});