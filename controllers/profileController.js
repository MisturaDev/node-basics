const Profile = require("../models/Profile");

// CREATE profile
const createProfile = async (req, res) => {
  const { name, role } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  try {
    const profile = new Profile({
      name,
      role: role || process.env.DEFAULT_ROLE,
    });

    await profile.save();

    res.status(201).json({
      message: "Profile created successfully",
      data: profile,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET all profiles
const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().sort({ createdAt: -1 });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createProfile,
  getProfiles,
};
