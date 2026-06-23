const axios = require("axios");

const TOKEN = process.env.TOKEN;

const config = {
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
};

async function fetchDepots() {
  const res = await axios.get(
    "http://4.224.186.213/evaluation-service/depots",
    config
  );

  return res.data?.depots || res.data || [];
}

async function fetchVehicles() {
  const res = await axios.get(
    "http://4.224.186.213/evaluation-service/vehicles",
    config
  );

  return res.data?.vehicles || res.data || [];
}

module.exports = { fetchDepots, fetchVehicles };