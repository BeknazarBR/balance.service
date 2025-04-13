const router = require('express').Router();

const usersRouter = require('../modules/users/router');
const tasksRouter = require('../modules/tasks/router');

router.use('/users', usersRouter);
router.use('/tasks', tasksRouter);

module.exports = router;
