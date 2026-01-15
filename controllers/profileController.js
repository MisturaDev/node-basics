const Profile = require("../models/Profile");

const createProfile = async (req, res) => {
  const { name, role } = req.body;

  // Validation
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  // Use default role if not provided
  const finalRole = role || process.env.DEFAULT_ROLE;

  try {
    const profile = new Profile({ name, role: finalRole });
    await profile.save(); // save to MongoDB

    res.status(201).json({
      message: "Profile created successfully",
      data: profile,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { createProfile };
