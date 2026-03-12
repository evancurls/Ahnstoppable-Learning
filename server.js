import express from "express" 
import axios from "axios" 
import cors from "cors"

const app = express();
const port = 3000; 

const corsOptions = {
    origin: ["http://localhost:5173"]
};

// middleware 
app.use(express.static("./client/src/pages")); // gives us access to the pages folder to access the html and css files
app.use(express.json()); // For parsing JSON data (used for API requests)
app.use(express.urlencoded({ extended: true })); // For parsing form data (used for standard html)
app.use(cors(corsOptions)); 

// gets the homepage 
// loads up 
app.get("/", (res, req) => {
    res.json({
        msg: "Hello"
    }) 
});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`); 

});



