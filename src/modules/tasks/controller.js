const service = require('./service')

module.exports = {
    async getJobs(req, res, next) {
        try {
            const jobs = await service.getJobs();

            return res.status(200).json({
                jobs,
            });
        } catch (e) {
            return next(e);
        }
    },
}
