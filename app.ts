import express, {Express} from 'express';
import mongoose from "mongoose";
require('dotenv').config();
import logger = require('morgan');


const app: Express = express();

function startDB() {
    try {
        mongoose.connect(`${process.env.DB_URL}`);
    } catch (exception) {
        console.log(exception);
    }
}

startDB();

app.use(express.json());
app.use(logger("combined"));

import userListItemsRouter from './routes/listItems';
app.use('/user', userListItemsRouter);

app.listen(process.env.PORT, () => {
    console.log(`running at https://localhost:${process.env.PORT}`);
});