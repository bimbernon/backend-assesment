"use strict";

const lowDb = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

let dataBase;

async function createConection() {
  const adapter = new FileAsync("db.json");
  dataBase = await lowDb(adapter);
  dataBase.defaults({ users: [] }).write();
}

const getConnection = () => dataBase;

module.exports = { createConection, getConnection };
