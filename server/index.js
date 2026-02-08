import express from "express" 
import axios from "axios" 

const app = express();
const port = 3000; 

// These two lines replace the old body-parser library:
app.use(express.json()); // For parsing JSON data
app.use(express.urlencoded({ extended: true })); // For parsing form data

