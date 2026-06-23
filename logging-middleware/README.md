## Logging Middleware

This is a reusable logging middleware that sends logs to a remote evaluation server.

## Usage

```js
const Log = require("./logger");

Log("backend", "info", "controller", "User created successfully");