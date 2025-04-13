const router = require('express').Router();
const controller = require('./controller');

router.get('/get-all', controller.getJobs);

module.exports = router;
