import dotenv from "dotenv" 
import {Pool} from "pg"

dotenv.config({ path: "hidden.env" });

export const pool = new Pool({
  user: "postgres", 
  password: process.env.DB_PASSWORD, 
  host: "localhost", 
  database: "AhnstoppableLearning", 
  port: 5432
});
