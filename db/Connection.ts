import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "covidleads",
  password: "admin",
  port: 5432,
});

console.log("Connected");
