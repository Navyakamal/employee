
const loggingMiddleware=(req,res,next)=>{
    console.log(`Request : ${req.method} ${req.url}`);
    res.on('finish',()=>console.log(`Response : ${res.statusCode}`))
    next()
}

module.exports=loggingMiddleware