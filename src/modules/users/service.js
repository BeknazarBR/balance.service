const userRepository = require('../../global/database/repositories/user.repository');
const ApiError = require('../../global/error/api.error');

module.exports = {
    async updateBalance({ id, amount }) {
        const user = await userRepository.findOneById(id);
        if (!user) {
            throw ApiError.notFound('Пользователь с таким идентификатором не найден');
        }

        const update = await userRepository.updateBalance(id, amount);

        if (!update) {
            throw ApiError.internal('У вас не достаточно средств для списания');
        }

        return update;
    },
}
