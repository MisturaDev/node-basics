// Load environment variables FIRST
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Use PORT from .env or fallback
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
const profileRoutes = require("./routes/profileRoutes");
app.use("/api", profileRoutes);

const osRoutes = require("./routes/osRoutes");
app.use("/api", osRoutes);

// Basic routes
app.get("/", (req, res) => {
  res.send(process.env.GREETING_MESSAGE || "Welcome to the Express Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is the Express About Page");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express API" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("page not found");
});

// Connect to MongoDB THEN start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Express server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
