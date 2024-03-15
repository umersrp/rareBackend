const redis = require('redis');

// Create Redis client
const redisClient = redis.createClient();

redisClient.on('error', (err,data) => {
    console.log(data)
    console.error('Redis error:', err);
});

module.exports = redisClient;