const createProfile = (req, res) => {
  const { name, role } = req.body;

// Use default role from .env if role is missing
  const finalRole = role || process.env.DEFAULT_ROLE;

  // Validation: name is required
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  // Respond with profile data
  res.status(201).json({
    message: "Profile created successfully",
    data: {
      name,
      role: finalRole,
    },
  });
};

module.exports = { createProfile };
