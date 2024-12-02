//install mangoose(npm i mongoose)

const mongoose = require("mongoose");
require("dotenv").config(); // whatever in .env file will be loaded in process

//Connecting database(It's a Promise)
const dbConnect = ()=>{
    //feeding process we need to use .env library (install dotenv in terminal)
    mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/defaultdb',{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    })
    .then(()=>console.log("DB ka connection is Succesful"))
    .catch((error)=>{
        console.log(process.env.DATABASE_URL)
        console.log("Issue in DB");
        console.log(error.message);
        process.exit(1);//What's this
    })
}

//exporting the dbConnect function
module.exports = dbConnect;