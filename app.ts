import express, {Express} from 'express';
import mongoose from "mongoose";

require('dotenv').config();
import logger = require('morgan');
import userListItemsRouter from './routes/listItems';
import indexRouter from './routes/index';

function startDB() {
    try {
        mongoose.connect(`${process.env.DB_URL}`);
    } catch (exception) {
        console.log(exception);
    }
}

mongoose.connection.on('connected', () => {
    const app: Express = express();
    app.use(express.json());
    app.use(logger("combined"));
    app.use('/user', userListItemsRouter);
    app.use('/', indexRouter);

    app.listen(process.env.PORT, () => {
        console.log(`running at ${process.env.API_URL}:${process.env.PORT}`);
    });
});

startDB();
