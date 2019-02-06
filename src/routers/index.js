'use strict';
const userRouter = require('./user.router');

module.exports = function (app) {

    app.use('/api', userRouter);

};

