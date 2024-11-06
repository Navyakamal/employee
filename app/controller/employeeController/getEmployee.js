const { employeeService } = require("../../services");

exports.getAllEmployees = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit, 2) || 2;
        const page = parseInt(req.query.page) || 1;  
        
        const skip = (page - 1) * limit;
        const allEmployees = await employeeService.getAllEmployees(limit,skip);
        res.json({status:200,message:'Get employee details',allEmployees:allEmployees,pagination: { limit, skip }});
    } 
    catch (error) {
        res.json({ status:400,message: 'Failed to retrieve employees', error: error.message });
    }
};