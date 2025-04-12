require('dotenv').config();
const express = require('express');
const database = require('./global/database');
const migrate = require('./global/database/migrate');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./global/middlewares/error-handling.middleware');
const appConfig = require('./global/config/app.config');

const PORT = appConfig.port;

const app = express();

app.use(cors({
    origin: '*',
}));
app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
    try {
        await database.authenticate();
        await migrate.up();

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}


start()
