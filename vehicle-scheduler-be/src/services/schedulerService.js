const { fetchDepots, fetchVehicles } = require("./apiService");
const knapsack = require("../utils/knapsack");

async function generateSchedule() {
  const depots = await fetchDepots();
  const vehicles = await fetchVehicles();

  const safeDepots = Array.isArray(depots) ? depots : [];
  const safeVehicles = Array.isArray(vehicles) ? vehicles : [];

  const result = [];

  for (const depot of safeDepots) {
    const capacity = Number(depot?.MechanicHours || 0);

    const { maxImpact, selectedTasks } = knapsack(safeVehicles, capacity);

    result.push({
      depotID: depot?.ID,
      totalImpact: maxImpact,
      tasks: selectedTasks
    });
  }

  return result;
}

module.exports = { generateSchedule };