import express, {Application, NextFunction} from "express";
import {errorHandler} from "./middleware/error/errorHandler";
import createError = require('http-errors');
require('dotenv').config();
import path = require('path');
import cookieParser = require('cookie-parser');
import logger = require('morgan');
import {IndexRouter} from "./routes";
import {UserRouter} from "./routes/user";

const app: Application = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = new IndexRouter().getRouter();
const userRouter = new UserRouter().getRouter();

app.use('/', indexRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
// app.use(function(req: Request, res: Response, next: NextFunction) {
//   next(createError(404));
// });

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
