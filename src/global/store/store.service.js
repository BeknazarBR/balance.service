const redisClient = require('./redis-client');

module.exports = {
    async getByKey(key) {
        const value = await redisClient.get(key);
        return value;
    },
    async deleteByKey(key) {
        const value = await redisClient.del(key);

        return value;
    },
    async setIfNotExistByKey(key, value) {
        const status = await redisClient.set(key, value, {
            NX: true,
            EX: 60,
        });

        return status === 'OK';
    },
}
