import {Pool} from "pg";

export const pool = new Pool({
  user: "postgres", 
  password: process.env.DB_PASSWORD, 
  host: "localhost", 
  database: "AhnstoppableLearning", 
  port: 5432
});
