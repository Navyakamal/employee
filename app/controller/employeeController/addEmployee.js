const { employees } = require("../../database/models/employee");
const { employeeService } = require("../../services");
const bcrypt=require('bcrypt')

exports.addEmployee = async (req, res) => {
    const {password,...data}=req.body
    try {
        const existingEmployee = await employees.findOne({ email: data.email });
        if (existingEmployee) {
            return res.json({status:400, message: 'Employee already exists' });
        }
        const hashPsw=await bcrypt.hash(password,10)

        const newEmployee = await employeeService.addEmployee({...data,password:hashPsw});
        res.json({status:201,message:'Employee created successfully', newEmployee:newEmployee});
    } 
    catch (error) {
        res.json({status:400, message: 'Failed to add employee', error: error.message });
    }
};