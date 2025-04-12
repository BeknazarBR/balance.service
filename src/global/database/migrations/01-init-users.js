const { DataTypes } = require('sequelize');

module.exports = {
    up: async ({ context: db }) => {
        await db.getQueryInterface().createTable('users', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            balance: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 10000,
            },
        });

        await db.getQueryInterface().bulkInsert('users', [{
            balance: 10000,
        }]);
    },
    down: async ({ context: sequelize }) => {
        await sequelize.getQueryInterface().dropTable('users');
    }
};
