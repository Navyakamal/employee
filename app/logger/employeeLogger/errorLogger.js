const winston=require('winston')

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });

const errorLogger=async(err,req,res,next)=>{
    res.on('finish',()=>{
        logger.error({
            message: {
                method: req.method,
                url: req.originalUrl,
                status: res.statusCode || 500,
                responseTime: `${Date.now() - req.startTime} ms`,
                error: err.message,
                timestamp: new Date().toISOString(),
            }
        });
    
    })
    next(err);
}

module.exports={errorLogger}