const { employees } = require("../../database/models/employee");

exports.deleteEmployee=async(id)=>{
    try{
        deletedEmployee=await employees.findOneAndDelete(id)
        return deletedEmployee
    }
    catch(error){
        throw error
    }
}