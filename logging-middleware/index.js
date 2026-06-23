const axios = require("axios");

async function Log(stack, level, pkg, message) {
  try {
    const TOKEN = process.env.TOKEN;

    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
  } catch (err) {}
}

module.exports = Log;