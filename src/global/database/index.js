require('dotenv').config()
const { Sequelize } = require('sequelize')
const postgresqlConfig = require('../config/posgresql.config');

module.exports = new Sequelize(
    postgresqlConfig.database,
    postgresqlConfig.username,
    postgresqlConfig.password,
    {
        dialect: 'postgres',
        host: postgresqlConfig.host,
        port: postgresqlConfig.port,
    }
);
