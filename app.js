"use strict";

const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

app.use(morgan("dev"));
app.use(express.json);

app.use(require("./app/routes/users-routes"));

module.exports = app;
