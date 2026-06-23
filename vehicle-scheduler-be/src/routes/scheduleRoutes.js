const express = require("express");
const router = express.Router();
const { getSchedule } = require("../controllers/scheduleController");
const Log = require("@log");

router.get("/schedule", getSchedule);

module.exports = router;