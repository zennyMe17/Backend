// we should know schema so we should import

const Todo = require("../models/Todo")

//define route handler
//For DB access so not blocking main thread
//differnt type of exporting
exports.createTodo = async(req,res)=>{
    try{
        //extract title and description from req body
        const {title,description} = req.body;

        //create new todo object
        //create method use for insertion
        const response = await Todo.create({title,description});

        //send a JSON res with a succesful flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Succesfully'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
                success:false,
                data:"internal server error",
                message:err.message
        })
    }
}