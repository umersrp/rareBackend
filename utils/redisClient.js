const { createClient } = require('redis');


    const redisClient = createClient({
        password: process.env.STAGING_REDIS_PASSWORD,
        socket: {
            host: process.env.STAGING_REDIS_HOST,
            port: process.env.STAGING_REDIS_PORT
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
    },

    deleteData: (key) => {
       return redisClient.del(key, (err, response) => {
            if (err) {
                console.error('Error deleting value from Redis:', err);
              return  err;
            } else {
                console.log("eeee",response)
               return response;
            }
        });
       
    }
};

module.exports = redisMiddleware;


