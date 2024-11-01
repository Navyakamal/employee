const { employees } = require("../../database/models/employee");

exports.getEmployeesByStatus=async(status)=>{
    try{
        employeeByStatus=await employees.find({status})
        return employeeByStatus
    }
    catch(error){
        throw error
    }
}