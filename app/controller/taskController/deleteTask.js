const { taskService } = require("../../services");

exports.deleteTask=async(req,res)=>{
    const {taskId}=req.params
    try{
        const deletedTask=await taskService.deleteTask(taskId)
        res.json({status:200,message:"Task deleted successfully",deletedTask:deletedTask})
    }
    catch (error) {
        res.json({status:400, message: 'Failed to delete Task', error: error.message });
    }
}