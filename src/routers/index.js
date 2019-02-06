'use strict';
const userRouter = require('./user.router');
const clientRouter = require('./client.router');
const environmentRouter = require('./environment.router');
const deviceRouter = require('./device.router');
const messageRouter = require('./message.router');

module.exports = function (app) {

    app.use('/api/clients', clientRouter);

    app.use('/api/environments', environmentRouter);

    app.use('/api/devices', deviceRouter);

    app.use('/api/messages', messageRouter);

    app.use('/api', userRouter);

};

