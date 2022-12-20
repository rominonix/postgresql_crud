"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Client({
    user: "rominarebolledo",
    host: "localhost",
    password: "",
    database: "firstapi",
    port: 5432, // default port that can be changed to whatever you want
});
exports.pool.connect();
