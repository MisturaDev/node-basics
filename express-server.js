const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

//Routes
const profileRoutes = require("./routes/profileRoutes");
app.use("/api", profileRoutes);

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


//404 route
app.use((req, res) => {
    res.status(404).send("page not found");
});

//Start server
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});