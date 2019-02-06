'use strict';
const userRouter = require('./user.router');
const clientRouter = require('./client.router');
const environmentRouter = require('./environment.router');

module.exports = function (app) {

    app.use('/api/clients', clientRouter);

    app.use('/api/environments', environmentRouter);

    app.use('/api', userRouter);

};

