const { createClient } = require('redis');


const redisClient = createClient({
    password: process.env.PRODUCTION_REDIS_PASSWORD || 'YTHTP4BCCvQ2A9ybHK5HMuuHLDxGwttM',
    socket: {
        host: process.env.PRODUCTION_REDIS_HOST || 'redis-14944.c323.us-east-1-2.ec2.cloud.redislabs.com',
        port: process.env.PRODUCTION_REDIS_PORT || '14944',
        connect_timeout: 30000,
    }
});
    
    // Handle Redis client errors
    redisClient.connect('error', err => {
        if(err){
            console.error('Redis Client Error', err);
            return;
        }
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


