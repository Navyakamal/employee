const { jwtMiddleware } = require("./employeeMiddleware/jwtMiddleware");
const { loggingMiddleware } = require("./employeeMiddleware/loggingMiddleware");
const rateLimitMiddleware = require("./employeeMiddleware/ratelimitMiddleware");

module.exports-{
    jwtMiddleware,
    loggingMiddleware,
    rateLimitMiddleware
}