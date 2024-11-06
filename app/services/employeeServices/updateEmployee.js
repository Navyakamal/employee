const { employees } = require("../../database/models/employee");
const bcrypt = require('bcrypt');

exports.updateEmployee=async(id,data)=>{
    try{
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        const updatedEmployee=await employees.findOneAndUpdate({ employeeId: id },data,{new:true})

        return updatedEmployee
    }
    catch(error){
        throw error
    }
}