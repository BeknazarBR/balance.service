const TaskModel = require('../models/task.model');

module.exports = {
    async insert(taskInfo) {
        console.log(taskInfo);
        const res = await TaskModel.create(taskInfo);
        console.log(res);
    }
};
