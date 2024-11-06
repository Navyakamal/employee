const tasks = require("../../database/models/employee/tasks");

exports.createTask=async(employeeId,taskId,taskName,files)=>{
    try{
        const newTask=new tasks({employeeId,taskId,taskName,files})
        await newTask.save()
        return newTask
    }
    catch(err){
        throw err
    }

}