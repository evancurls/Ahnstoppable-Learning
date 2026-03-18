import express from "express"; 
import cors from "cors"; 
import { Pool } from "pg"; 
import dotenv from "dotenv";

dotenv.config({ path: "hidden.env" });

// initilize express 
const app = express(); 
const port = 3000; 

const corsOptions = {
    origin: ["http://localhost:5173"]
};

const pool = new Pool({
  user: "postgres", 
  password: hidden.env.DB_PASSWORD, 
  host: "localhost", 
  database: "AhnstoppableLearning", 
  port: 5432
});

// asyncHandler
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

//middleware 
app.use(express.json()); // For parsing JSON data (used for API requests)
app.use(express.urlencoded({ extended: true })); // For parsing form data (used for standard html)
app.use(cors(corsOptions)); 

app.get("/api/questions", asyncHandler(async (req, res) => {
    // gets questions in chronological order
    const allQuestions = await pool.query("SELECT * FROM questions ORDER BY created_at DESC"); 
    res.json(allQuestions.rows); 

}));

app.get("/api/comments", asyncHandler(async (req, res) => {
    // gets comments in chronological order
    const allComments = await pool.query("SELECT * FROM comments ORDER BY created_at DESC"); 
    res.json(allComments.rows); 
    
}));

app.get("/api/questions/:classID/:date", asyncHandler(async (req, res) => {

    const {classID, date} = req.params; 
    const result = await pool.query(
        "SELECT * FROM questions WHERE class_id = $1 AND DATE(created_at) = $2 ORDER BY created_at DESC",
        [classID, date]
    );

    res.json(result.rows);

}));

app.get("/api/comments/:classID/:date", asyncHandler(async (req, res) => {

    const {classID, date} = req.params; 
    const result = await pool.query(
        "SELECT * FROM comments WHERE class_id = $1 AND DATE(created_at) = $2 ORDER BY created_at DESC",
        [classID, date]
    );

    res.json(result.rows);

}));

app.post("/api/questions", asyncHandler(async (req, res) => {
    const { student_id, class_id, content } = req.body;

    const newQuestion = await pool.query(
    "INSERT INTO questions (student_id, class_id, content) VALUES ($1, $2, $3) RETURNING *",
    [student_id, class_id, content]
    );

    res.status(201).json(newQuestion.rows[0]);
    
})); 

app.post("/api/comments", asyncHandler(async (req, res) => {
    const { student_id, class_id, content } = req.body;

    const newComment = await pool.query(
    "INSERT INTO comments (student_id, class_id, content) VALUES ($1, $2, $3) RETURNING *",
    [student_id, class_id, content]
    );

    res.status(201).json(newComment.rows[0]);
}));

app.delete("/api/questions/:id", asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM questions WHERE id = $1", [id]);

    if (result.rowCount === 0) {
        return res.status(404).json({ message: "Question not found" });
    }

    res.json({ message: "Question deleted successfully" });
})); 

app.delete("/api/comments/:id", asyncHandler(async (req, res) => {
    const { id } = req.params;

    const result = await pool.query("DELETE FROM comments WHERE id = $1", [id]);

    if (result.rowCount === 0) {
        return res.status(404).json({ message: "Comment not found" });
    }
    
    res.json({ message: "Comment deleted successfully" });
})); 

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// global error handler 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error"
  });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

