"use strict";

const app = require("./app");
const { createConection } = require("./database");

createConection();
app.listen(3000);

console.log("LISTENING...", 3000);
