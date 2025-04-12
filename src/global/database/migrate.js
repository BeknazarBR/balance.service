const { Umzug, SequelizeStorage } = require('umzug');
const sequelize = require('./');

const umzug = new Umzug({
    migrations: { glob: 'src/global/database/migrations/*.js' },
    context: sequelize,
    storage: new SequelizeStorage({
        sequelize,
    }),
    logger: console,
});

module.exports = umzug;
