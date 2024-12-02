// // npm init -y(Terminal)
// // npm i express

// // creating express instances
// const express = require("express");
// const app = express();


// //checking of connection
// app.listen(8000,()=>{
//     console.log("port running at 8000")
// })

const express = require("express");
const app = express();

//Load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json req body
app.use(express.json());

//import routes for TODO API

const todoRoutes = require("./routes/todo");

//mount the todo API
//local url and port and above in the url
app.use("/api/v1",todoRoutes);

//start server

app.listen(PORT,()=>{
    console.log(`Server started succesfully at localhost:${PORT}`)
})

//connect to the database

const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HomePage Babe</h1>`);
})