const configService = require('./config.service');

module.exports = {
    url: configService.getString('REDIS_URL'),
};
