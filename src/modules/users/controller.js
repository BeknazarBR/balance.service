const service = require('./service')

module.exports = {
    async updateBalance(req, res, next) {
        try {
            const status = await service.updateBalance({
                id: req.body.userId,
                amount: req.body.amount,
            });

            return res.status(200).json({ status });
        } catch (e) {
            return next(e);
        }
    },
}
