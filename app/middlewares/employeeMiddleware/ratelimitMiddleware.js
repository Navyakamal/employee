const ratelimit=require('express-rate-limit')

const rateLimitMiddleware=ratelimit({
    windowMs: 60 * 1000, 
    max: 5,
    message: "You have exceeded your 5 requests per minute limit"
})

module.exports=rateLimitMiddleware