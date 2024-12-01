// 1 .npm init -y
// 2. npm i express
// 3. create server.js

const express = require('express');
const app = express(); // single instance in app

// specifying parse json data and add it to the req.body ->Put or post
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//activation of server
app.listen(8000, ()=>{
    console.log("Server started at 8000 Port")
});

//retrive
app.get('/', (req,res)=>{
    res.send("Hello Jee, Kaise ho saare");
})

// post submit so in req we have data 
app.post('/api/cars', (req,res)=>{
    const{name,brand} =  req.body;
    console.log(name);
    console.log(brand);
    res.send("Submitted")
})

//connecting mogoDB and node.js

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {//mandotry configuration
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
.then(()=>{
    console.log("Connection Success")
})
.catch((error)=>{
    console.log("Recieved an error")
});