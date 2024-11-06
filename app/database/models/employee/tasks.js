const { default: mongoose } = require("mongoose");

const taskSchema=mongoose.Schema({
    employeeId:{
        type: String,
        required: true,
    },
    taskId:{
        type: String,
        required: true,
    },
    taskName:{
        type:String,
        required:true, 
    },
    files:{
        type:String,
        required:true, 
    },
    deletedAt: {
        type: Date,
        default: null, 
    }
})

const tasks=mongoose.model("tasks",taskSchema)
module.exports=tasks