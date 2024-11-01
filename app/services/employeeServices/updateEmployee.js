const { employees } = require("../../database/models/employee");

exports.updateEmployee=async(id,data)=>{
    try{
        const updatedEmployee=await employees.findOneAndUpdate(id,data,{new:true})
        return updatedEmployee
    }
    catch(error){
        throw error
    }
}