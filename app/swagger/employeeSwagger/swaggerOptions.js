const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0', 
        info: {
            title: 'Employee API', 
            version: '1.0.0', 
        },
        servers: [
            {
                url: 'http://localhost:8000/api/employee' 
            },
        ],
    },
    apis: ['./app/routes/employee/*.js'],
};

const swaggerSpec = swaggerJsDoc(options);
module.exports = swaggerSpec;
