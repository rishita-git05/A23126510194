const { generateSchedule } = require("../services/schedulerService");
const Log = require("@log");

console.log(typeof Log);

async function getSchedule(req, res) {
  try {
    const result = await generateSchedule();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getSchedule };