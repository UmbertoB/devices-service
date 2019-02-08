'use strict';
const environmentSocket = require('./environment.socket');
const messageSocket = require('./message.socket');
const tokenGuardSocket = require('../middlewares/token-guard.socket');
const messageService = require('../services/message.service');

module.exports = function (io, app) {

    io.use(tokenGuardSocket).on('connection', (socket) => {

        console.log('connected');

        socket.on('disconnect', function (socket) {

            console.log('disconnected');

        });

        /**
         * Event for Active or Deactivate Devices
         */
        socket.on('devices-signal', async (signal) => {

            io.emit('devices-status', signal);

        });

        socket.on('message-sent', async (message) => {

            io.emit('update-dashboard', message);

            await messageService.createMessage(message)

        });


        socket.on('new-environment', (environment) => {

            const device = {
                id: environment.id,
                environment: {
                    id: environment.id,
                    title: environment.title,
                    clientId: environment.clientId
                }
            }

            io.emit('update-devices', device);

        });


});






};

