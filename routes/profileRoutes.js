const express = require("express");
const router = express.Router();

const { createProfile } = require("../controllers/profileController");

router.post("/profiles", createProfile);

module.exports = router;
