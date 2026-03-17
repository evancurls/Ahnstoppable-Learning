import express from "express"; 
import cors from "cors"; 
import { Pool } from "pg"; 
import "dotenv/config";

// initilize express 
const app = express(); 
const port = 3000; 

const corsOptions = {
    origin: ["http://localhost:5173"]
};

const pool = new Pool({
  user: "postgres", 
  password: process.env.DB_PASSWORD, 
  host: "localhost", 
  database: "AhnstoppableLearning", 
  port: 5432
});

client.connect(); 

//middleware 
app.use(express.json()); // For parsing JSON data (used for API requests)
app.use(express.urlencoded({ extended: true })); // For parsing form data (used for standard html)
app.use(cors(corsOptions)); 

app.get("/api/questions", async (req, res) => {

    try {
        // gets questions in chronological order
        const allQuestions = await pool.query("SELECT * FROM questions WHERE condition ORDER BY created_at DESC"); 
        res.json(allQuestions.rows); 
    } catch (err) {
        res.status(500).json({error: err.message})
    }

});

app.get("/api/comments", async (req, res) => {

    try {
        // gets questions in chronological order
        const allComments = await pool.query("SELECT * FROM comments WHERE condition ORDER BY created_at DESC"); 
        res.json(allComments.rows); 
    } catch (err) {
        res.status(500).json({error: err.message})
    }
    
});

app.post("/api/questions", async (req, res) => {
    const { student_id, class_id, content } = req.body;

    try {
        const newQuestion = await pool.query(
        "INSERT INTO questions (student_id, class_id, content) VALUES ($1, $2, $3) RETURNING *",
        [student_id, class_id, content]
        );

        res.status(201).json(newQuestion.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error while posting" });
    }
}); 

app.post("/api/comments", async (req, res) => {
    const { student_id, class_id, content } = req.body;

    try {
        const newQuestion = await pool.query(
        "INSERT INTO comments (student_id, class_id, content) VALUES ($1, $2, $3) RETURNING *",
        [student_id, class_id, content]
        );

        res.status(201).json(newQuestion.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error while posting" });
    }
});

app.delete("/api/questions/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM questions WHERE id = $1", [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.json({ message: "Question deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}); 

app.delete("/api/comments/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM comments WHERE id = $1", [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Comment not found" });
        }
        
        res.json({ message: "Question deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}); 

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

