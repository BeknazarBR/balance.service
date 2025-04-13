const configService = require('./config.service');
const stringUtils = require('../utils/string.utils');

module.exports = {
    port: configService.getNumber('PORT'),
    serverID: stringUtils.generateUnique(),
};
