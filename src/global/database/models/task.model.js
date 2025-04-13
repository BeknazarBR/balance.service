const db = require('../index');
const { DataTypes } = require('sequelize');

const TaskModel = db.define('tasks', {
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
}, {
    timestamps: false,
});

module.exports = TaskModel;
