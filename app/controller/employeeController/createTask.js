const { employeeService } = require("../../services");

exports.createTask=async(req,res)=>{
    const {taskId, taskName } = req.body;
    const employeeId = req.payload;
    const files = req.file?.path;
    try{
        const newTask=await employeeService.createTask(employeeId,taskId,taskName,files)
        res.json({status:201,message:"Task created successfully",newTask:newTask})
    }
    catch (error) {
        res.json({status:400, message: 'Failed to add Task', error: error.message });
    }
}