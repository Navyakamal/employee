const winston=require('winston')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });

  const performanceLogger = (req, res, next) => {
    const start = process.hrtime(); 

    res.on('finish', () => { 
        const duration = process.hrtime(start);
        const milliseconds = duration[0] * 1000 + duration[1] / 1e6;

        logger.info({
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            responseTime: `${milliseconds.toFixed(2)} ms`,
            timestamp: new Date().toISOString(),
        });
    });

    next();
};

module.exports={performanceLogger}


