const { employeeService } = require("../../services");

exports.getEmployeeByStatus=async(req,res)=>{
    const {status}=req.query
    try{
        const employeeByStatus=await employeeService.getEmployeesByStatus(status)
        res.json({status:200,message:"Employees with Active status",employees:employeeByStatus})
    }
    catch (error) {
        res.json({ status:400,message: 'Failed to retrieve employees', error: error.message });
    }
}