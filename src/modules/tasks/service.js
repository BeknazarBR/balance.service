const taskRepository = require('../../global/database/repositories/task.repository')
const storeService = require('../../global/store/store.service');
const appConfig = require('../../global/config/app.config');
const cron = require('node-cron');
const tasks = require('./jobs');
const dateUtils = require('../../global/utils/date.utils');

async function handleTask(taskName, taskHandler) {
    const date = new Date().toISOString();
    const data = JSON.stringify({
        severID: appConfig.serverID,
        date,
    })
    const isProcessing = await storeService.setIfNotExistByKey(taskName, data);

    if (!isProcessing) {
        console.log(`Задача ${taskName} уже выполняется на другом сервере`);
        return;
    }

    try {
        await taskHandler();
    } catch (err) {
        console.error(`Ошибка в задаче ${taskName}:`, err);
    } finally {
        await taskRepository.insert({
            task_name: taskName,
            start_datetime: date,
            end_datetime: new Date().toISOString(),
            server_id: appConfig.serverID,
        });
        await storeService.deleteByKey(taskName);
    }
}
module.exports = {
    initCronJobs() {
        for (const task of tasks) {
            cron.schedule(task.interval, async () => {
                await handleTask(task.name, task.job);
            })
        }
    },
    async getJobs() {
        const jobs = [];

        for (const task of tasks) {
            const processingJob = await storeService.getByKey(task.name);
            if (processingJob) {
                const parsed = JSON.parse(processingJob);
                const startDate = new Date(parsed.date);
                const duration = -dateUtils.diffNow(startDate);

                jobs.push({
                    task_name: task.name,
                    status: 'processing',
                    server_id: parsed?.severID,
                    started_date: startDate,
                    duration,
                });
            } else {
                jobs.push({
                    task_name: task.name,
                    status: 'waiting',
                });
            }
        }

        return jobs;
    }
}
