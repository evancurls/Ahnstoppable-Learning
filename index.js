import express from "express" 
import axios from "axios" 
import dirname from "dirname";
import path from 'path'; 

const app = express();
const port = 3000; 

// middleware 
app.use(express.static("./client/src/pages")); // gives us access to the pages folder to access the html and css files
app.use(express.json()); // For parsing JSON data (used for API requests)
app.use(express.urlencoded({ extended: true })); // For parsing form data (used for standard html)

// gets the homepage 
// loads up 
app.get("/", (req, res) => {
    // res.render("./pages/Login.html") (.render is used for .ejs files not static html files)

    // makes Login.html the home page
    res.sendFile('Login.html', {root: './client/src/pages'}, (err) => {
        if (err) {
            console.log("The file didn't send"); 
        } else {
            console.log("File sent successfully")
        }
        console.log(err); 
    }); 
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    
})
