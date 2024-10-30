const { employeeService } = require("../../services");

exports.updateEmployee=async(req,res)=>{
    const {employeeId}=req.params
    const data=req.body 
    try{
        const updatedEmployee=await employeeService.updateEmployee(employeeId,data)
        res.json({status:200,message:"Employee updated successfully", employee:updatedEmployee})
    }
    catch(error){
        res.json({ status:400,message: 'Failed to update', error: error.message });       
    }

}