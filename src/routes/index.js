const router = require('express').Router();

const usersRouter = require('../modules/users/router');

router.use('/users', usersRouter);

module.exports = router;
