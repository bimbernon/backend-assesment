"use strict";

const { Router } = express.Router();
const router = Router();
const express = require("express");

const { registerUser } = require("../controllers/register-user");
const { loginUser } = require("../controllers/login-user");

router.post("/users/resister", registerUser);
router.post("/users/login", loginUser);

module.exports = router;
