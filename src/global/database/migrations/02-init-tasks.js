const { DataTypes } = require('sequelize');

module.exports = {
    up: async ({ context: db }) => {
        await db.getQueryInterface().createTable('tasks', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            start_datetime: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            end_datetime: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            server_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            task_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        });
    },
    down: async ({ context: sequelize }) => {
        await sequelize.getQueryInterface().dropTable('tasks');
    }
};
