const express = require("express");

const router = express.Router();

const { getOSInfo } = require("../controllers/osController");

router.get("/os", getOSInfo);

module.exports = router;
