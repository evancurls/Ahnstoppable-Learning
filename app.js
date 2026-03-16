import express from "express"; 
import cors from "cors"; 
import pg from "pg"; 

// initilize express 
const app = express(); 
const port = 3000; 

const corsOptions = {
    origin: ["http://localhost:5173"]
};

const client = new pg.Client({
  user: "postgres", 
  password: "oscarpostgres", 
  host: "localhost", 
  database: "world", 
  port: 5432
});

client.connect(); 

//middleware 
app.use(express.json()); // For parsing JSON data (used for API requests)
app.use(express.urlencoded({ extended: true })); // For parsing form data (used for standard html)
app.use(cors(corsOptions)); 

app.get("/", (res, req) => {
    res.json({
        msg: "Hello"
    })
});

async function findIndex(index) {
    
};

app.post("/api/questions", async (res, req) => {
    const { student_id, class_id, content } = req.body;

    try {
        const newQuestion = await client.query(
        "INSERT INTO questions (student_id, class_id, content) VALUES ($1, $2, $3) RETURNING *",
        [student_id, class_id, content]
        );

        res.status(201).json(newQuestion.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error while posting" });
    }
}); 

app.post("/api/comments", async (res, req) => {
    const { student_id, class_id, content } = req.body;

    try {
        const newQuestion = await client.query(
        "INSERT INTO comments (student_id, class_id, content) VALUES ($1, $2, $3) RETURNING *",
        [student_id, class_id, content]
        );

        res.status(201).json(newQuestion.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error while posting" });
    }
});

app.delete("/api/questions", (res, req) => {
    
}); 

app.delete("/api/comments", (res, req) => {
    
}); 

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

