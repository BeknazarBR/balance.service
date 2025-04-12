const configService = require('./config.service');

module.exports = {
    host: configService.getString('POSTGRESQL_HOST'),
    port: configService.getNumber('POSTGRESQL_PORT'),
    database: configService.getString('POSTGRESQL_DATABASE'),
    password: configService.getString('POSTGRESQL_PASSWORD'),
    username: configService.getString('POSTGRESQL_USERNAME'),
};
