//imort the Todo model
const Todo=require('../models/todo');

//define the route handler for creating a new todo

exports.createTodo=async(req,res)=>{
    try{
        const {title,description}=req.body;
        const newTodo=new Todo({
            title,
            description
        });
        const savedTodo=await newTodo.save();
        res.status(200).json({
            message:'Todo created successfully',
            todo: savedTodo
        }); 
    }catch(error){
        console.error('Error creating todo:', error);
        res.status(500).json({

            message:'Internal server error'
        });
    }
};