const { employeeService } = require("../../services");

exports.getAllEmployees = async (req, res) => {
    try {
        const allEmployees = await employeeService.getAllEmployees();
        res.json({status:200,message:'Get employee details',allEmployees:allEmployees});
    } 
    catch (error) {
        res.json({ status:400,message: 'Failed to retrieve employees', error: error.message });
    }
};