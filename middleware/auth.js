import jwt from "jsonwebtoken";
import { pool } from "../db.js";

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const result = await pool.query("SELECT * FROM users WHERE id = $1", [decoded.id]);

    if (result.rows.length === 0)
      return res.status(401).json({ error: "User no longer exists" });

    req.user = result.rows[0];
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};