const UserModel = require('../models/user.model');
const db = require('../index');
const { Op } = require('sequelize');

module.exports = {
    async findOneById(id) {
        const user = await UserModel.findOne({
            where: {
                id,
            },
        });

        return user;
    },
    async updateBalance(id, amount) {
        const [updatedRows] = await UserModel.update({
            balance: db.literal(`balance + ${amount}`)
        }, {
            where: {
                id,
                balance: { [Op.gte]: -amount },
            }
        });

        return updatedRows > 0;
    }
};
