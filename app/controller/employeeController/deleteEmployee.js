const { employeeService } = require("../../services");

exports.deleteEmployee=async(req,res)=>{
    const {employeeId}=req.params
    try{
        const deletedEmployee=await employeeService.deleteEmployee(employeeId)
        res.json({status:200,message:"Employee deleted successfully",deletedEmployee:deletedEmployee})
    }
    catch(error){
        res.json({status:400,message:"Failed to delete employee",error:error.message})
    }
}