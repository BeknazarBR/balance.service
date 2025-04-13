const timers = require('../../../global/utils/timer.utils');

module.exports = [
    {
        name: 'task-1',
        interval: '*/10 * * * * *',
        job: () => timers.sleep(120 * 1000),
    },
    {
        name: 'task-2',
        interval: '*/10 * * * * *',
        job: () => timers.sleep(120 * 1000),
    },
    {
        name: 'task-3',
        interval: '*/15 * * * * *',
        job: () => timers.sleep(120 * 1000),
    },
    {
        name: 'task-4',
        interval: '*/20 * * * * *',
        job: () => timers.sleep(120 * 1000),
    },
    {
        name: 'task-5',
        interval: '*/15 * * * * *',
        job: () => timers.sleep(120 * 1000),
    },
    {
        name: 'task-6',
        interval: '*/10 * * * * *',
        job: () => timers.sleep(120 * 1000),
    },
    {
        name: 'task-7',
        interval: '*/10 * * * * *',
        job: () => timers.sleep(120 * 1000),
    },
    {
        name: 'task-8',
        interval: '*/30 * * * * *',
        job: () => timers.sleep(120 * 1000),
    },
    {
        name: 'task-9',
        interval: '*/30 * * * * *',
        job: () => timers.sleep(120 * 1000),
    },
    {
        name: 'task-10',
        interval: '*/18 * * * * *',
        job: () => timers.sleep(120 * 1000),
    },
];
