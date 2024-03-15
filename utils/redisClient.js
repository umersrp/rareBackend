const redis = require('redis');

// Create Redis client
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  });

//   console.log("redisClients",redisClient.ping().then((res) => res))

redisClient.on('error', (err,data) => {
    console.log(data)
    console.error('Redis error:', err);
});



module.exports = redisClient;