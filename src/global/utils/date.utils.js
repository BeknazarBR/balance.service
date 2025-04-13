const { DateTime } = require('luxon');

module.exports = {
    diffNow(value) {
        const date = DateTime.fromJSDate(value);
        if (!date.isValid) {
            return null;
        }

        return date.diffNow('seconds').seconds;
    }
}
