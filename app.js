import "dotenv/config"; 
import express from "express";
import cors from "cors";
import {pool} from "./db.js";
import router from "./routes/auth.js"; 
import passport from "./config/passport.js"; 


// initilize express 
const app = express(); 

const corsOptions = {
    origin: ["http://localhost:5173"]
};

//middleware 
app.use(express.json()); // For parsing JSON data (used for API requests)
app.use(express.urlencoded({ extended: true })); // For parsing form data (used for standard html)
app.use(cors(corsOptions)); 
if (process.env.NODE_ENV !== "test") {
    app.use(passport.authenticate()); 
}
app.use("/auth", router); 

app.get("/", (req, res) => {
   res.json({msg: ["Hello from the backend"]}); 
})

app.get("/api/questions", async (req, res) => {
    // gets questions in chronological order
    const allQuestions = await pool.query("SELECT * FROM questions ORDER BY created_at DESC"); 
    res.json(allQuestions.rows); 

});

app.get("/api/comments", async (req, res) => {
    // gets comments in chronological order
    const allComments = await pool.query("SELECT * FROM comments ORDER BY created_at DESC"); 
    res.json(allComments.rows); 
    
});

app.get("/api/questions/:classID/:date", async (req, res) => {

    const {classID, date} = req.params; 
    const result = await pool.query(
        "SELECT * FROM questions WHERE class_id = $1 AND DATE(created_at) = $2 ORDER BY created_at DESC",
        [classID, date]
    );

    res.json(result.rows);

});

app.get("/api/comments/:classID/:date", async (req, res) => {

    const {classID, date} = req.params; 
    const result = await pool.query(
        "SELECT * FROM comments WHERE class_id = $1 AND DATE(created_at) = $2 ORDER BY created_at DESC",
        [classID, date]
    );

    res.json(result.rows);

});

app.post("/api/questions", async (req, res) => {
    const { student_id, class_id, content } = req.body;

    const newQuestion = await pool.query(
    "INSERT INTO questions (student_id, class_id, content) VALUES ($1, $2, $3) RETURNING *",
    [student_id, class_id, content]
    );

    const questionData = newQuestion.rows[0]; 
    req.app.get("io").emit("receive_new_question", questionData);

    res.status(201).json(newQuestion.rows[0]);
    
}); 

app.post("/api/comments", async (req, res) => {
    const { student_id, class_id, question_id, content } = req.body;

    const newComment = await pool.query(
    "INSERT INTO comments (student_id, class_id, question_id, content) VALUES ($1, $2, $3, $4) RETURNING *",
    [student_id, class_id, question_id, content]
    );

    const commentData = newComment.rows[0]; 
    req.app.get("io").to(`class_${class_id}`).emit("receive_new_comment", commentData);

    res.status(201).json(commentData);
});

app.delete("/api/questions/:id", async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM questions WHERE id = $1 RETURNING class_id", 
        [id]);

    if (result.rowCount === 0) {
        return res.status(404).json({ message: "Question not found" });
    }

    const classID = result.rows[0].class_id; 
    req.app.get("io").to(`class_${classID}`).emit("question_deleted", id);

    res.json({ message: "Question deleted successfully" });
}); 

app.delete("/api/comments/:id", async (req, res) => {
    const { id } = req.params;

    const result = await pool.query("DELETE FROM comments WHERE id = $1 RETURNING class_id", 
        [id]);

    if (result.rowCount === 0) {
        return res.status(404).json({ message: "Comment not found" });
    }

    const classID = result.rows[0].class_id; 
    req.app.get("io").to(`class_${classID}`).emit("comment_deleted", id);
    
    res.json({ message: "Comment deleted successfully" });
}); 

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error"
  });
});

export default app 

