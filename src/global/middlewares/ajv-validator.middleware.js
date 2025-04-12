const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

module.exports = (schema) => {
    const validate = ajv.compile(schema);

    return (req, res, next) => {
        const valid = validate(req.body);
        if (!valid) {
            return res.status(400).json({
                error: 'Ошибка валидации',
                details: validate.errors.map(err => ({
                    field: err.instancePath || err.params.missingProperty,
                    message: err.message
                })),
            });
        }
        next();
    };
};
