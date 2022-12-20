import { Pool } from "pg"; // another alternative
import { Client } from "pg";

export const pool = new Client({
  user: "rominarebolledo",
  host: "localhost", // if it is hosted in the cloud, for example in digitalocean, you have to give the ip or the url
  password: "",
  database: "firstapi",
  port: 5432, // default port that can be changed to whatever you want
});

pool.connect();
