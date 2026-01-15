const express = require("express");
const router = express.Router();

const {
  createProfile,
  getProfiles,
} = require("../controllers/profileController");

router.post("/profiles", createProfile);
router.get("/profiles", getProfiles);

module.exports = router;
