const ApiError = require('../error/api.error');

module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {
        return res
            .status(err.status)
            .json({
                message: err.message,
            });
    }

    console.error(err.stack);
    return res
        .status(500)
        .json({
            message: 'Что-то пошло не так',
        });
}
