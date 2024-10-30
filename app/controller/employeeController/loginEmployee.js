const jwt = require("jsonwebtoken");
const { employeeService } = require("../../services");

exports.loginEmployee=async(req,res)=>{
    const {email,password}=req.body
    const isEmailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPswValid=/^.{1,7}$/.test(password)

    if(!isEmailValid || !isPswValid){
        return res.json({
            status:400,
            message: !isEmailValid ? 'Invalid email' : 'Password must me less than 8 characters'
        })
    }
    try{
        const employee=await employeeService.loginEmployee(email,password)
        if (employee) {

            const tokenPayload = {
                employeeId: employee.employeeId,
                phone: employee.phone,
                email: employee.email,
                firstName: employee.firstName,
            };
            const token=jwt.sign(tokenPayload,process.env.SECRET_KEY)
            res.json({
                status:200,
                message: "Login success",
                token,
            });
        } 
        else {
            return res.json({status:401,
                message: 'Invalid credentials',
            });
        }
    
    }
    catch(error){
        res.json({ status:400,message: 'Failed to login', error: error.message });       
    }
}