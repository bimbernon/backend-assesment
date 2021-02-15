"use strict";

const { getConnection } = require("../../database");

const registerUser = (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    lastNames: req.body.lastNames,
  };

  getConnection().get("users").push(newUser).write();

  res.send("Usuario creado con éxito");
};

module.exports = { registerUser };
