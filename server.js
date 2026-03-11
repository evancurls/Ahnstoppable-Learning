import express from "express" 
import axios from "axios" 

const app = express();
const port = 3000; 

// middleware 
app.use(express.static("./client/src/pages")); // gives us access to the pages folder to access the html and css files
app.use(express.json()); // For parsing JSON data (used for API requests)
app.use(express.urlencoded({ extended: true })); // For parsing form data (used for standard html)

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



