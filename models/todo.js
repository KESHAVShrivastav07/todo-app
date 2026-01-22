const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title: { type: String, 
        required: true,
        maxLength:100 
    },

    description:{
        type: String,
        required: true,
        maxLength:500

    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt:{
        type:Date,
        required:true,
        default: Date.now
    },
    status:{
        type: String,
        required: true,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
});
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;