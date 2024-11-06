const ratelimit=require('express-rate-limit')

const rateLimitMiddleware=ratelimit({
    windowMs: 60 * 1000, 
    max: 10,
    message: "You have exceeded your 10 requests per minute limit"
})

module.exports=rateLimitMiddleware