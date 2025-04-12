const router = require('express').Router();
const controller = require('./controller');
const validate = require('../../global/middlewares/ajv-validator.middleware');
const updateBalanceSchema = require('./validators/update-balance.schema');

router.patch('/update-balance', validate(updateBalanceSchema), controller.updateBalance);

module.exports = router;
