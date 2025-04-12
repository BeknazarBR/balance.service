const db = require('../index');
const { DataTypes } = require('sequelize');

const UserModel = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    timestamps: false,
});

module.exports = UserModel;
