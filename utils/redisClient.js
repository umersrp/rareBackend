const { createClient } = require('redis');


    const redisClient = createClient({
        password: 'p4JXuPZBdE7oCvaprOLzpDQ728oIUsr9',
        socket: {
            host: 'redis-16849.c325.us-east-1-4.ec2.cloud.redislabs.com',
            port: 16849
        }
    });
    
    // Handle Redis client errors
    redisClient.connect('error', err => {
        console.error('Redis Client Error', err);
    }).then((res) => res)
    
    // Set up middleware functions
const redisMiddleware = {
    // Middleware function to set data in Redis with expiration
    setDataWithExpiration: (key, value, expirationInSeconds) => {
        redisClient.set(key, value, 'EX', expirationInSeconds, (err, reply) => {
            if (err) {
                console.error('Error setting value in Redis:', err);
            } else {
                console.log('Set operation reply:', reply);
            }
        });
    },

    // Middleware function to get data from Redis
    getData: (key) => {
         return  redisClient.get(key, (err, value) => {
            if (err) {
                console.error('Error getting value from Redis:', err);
            } else {
             return value
            }
        });
    }
};

module.exports = redisMiddleware;


