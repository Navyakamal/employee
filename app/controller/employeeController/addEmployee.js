const { employeeService } = require("../../services");

exports.addEmployee = async (req, res) => {
    try {
        const newEmployee = await employeeService.addEmployee(req.body);
        res.json({status:201,message:'Employee created successfully', newEmployee:newEmployee});
    } 
    catch (error) {
        res.json({status:400, message: 'Failed to add employee', error: error.message });
    }
};