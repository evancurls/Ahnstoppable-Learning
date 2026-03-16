import express from "express"; 

// initilize express 
const app = express(); 
const port = 3000; 

//middleware 
app.use(express.json()); // For parsing JSON data (used for API requests)
app.use(express.urlencoded({ extended: true })); // For parsing form data (used for standard html)

app.get("/", (res, req) => {
    res.json({
        msg: "Hello"
    })
});

app.post("/post", (res, req) => {

}); 

app.post("/post", (res, req) => {

}); 

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

