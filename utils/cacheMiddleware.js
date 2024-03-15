const redisClient = require('./redisClient');

// Middleware function to cache responses
const cacheMiddleware = (req, res, next) => {
    const { key } = req.params; // Assuming the cache key is passed as a parameter
    redisClient.get(key, (err, data) => {
        if (err) {
            console.error('Redis error:', err);
            return next(); // Continue to the next middleware
        }
        if (data !== null) {
            // Data found in cache
            res.send(JSON.parse(data));
        } else {
            // Data not found in cache, proceed to the route handler
            next();
        }
    });
};

module.exports = cacheMiddleware;