require("module-alias/register");
const express = require("express");
require("dotenv").config();
const { getSchedule } = require("./src/controllers/scheduleController");
const scheduleRoutes = require("./src/routes/scheduleRoutes");

const app = express();

app.use(express.json());

app.use("/", scheduleRoutes);

app.listen(5000, () => {
  console.log("Server running");
});