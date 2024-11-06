const { employeeService } = require("../../services");

exports.deleteTask=async(req,res)=>{
    const {taskId}=req.params
    try{
        const deletedTask=await employeeService.deleteTask(taskId)
        res.json({status:200,message:"Task deleted successfully",deletedTask:deletedTask})
    }
    catch (error) {
        res.json({status:400, message: 'Failed to delete Task', error: error.message });
    }
}