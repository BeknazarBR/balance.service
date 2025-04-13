const redis = require('redis');
const redisConfig = require('../config/redis.config');

const client = redis.createClient({ url: redisConfig.url });

client.on('error', (err) => {
    console.log('Redis error:', err);
});

module.exports = client;
