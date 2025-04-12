module.exports = {
    type: 'object',
    properties: {
        userId: { type: 'number' },
        amount: { type: 'number' },
    },
    required: ['userId', 'amount'],
    additionalProperties: false,
};
