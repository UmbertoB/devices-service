'use strict';
const tokenGuardSocket = require('../middlewares/token-guard.socket');
const messageService = require('../services/message.service');

module.exports = async function(io) {

    io.use(tokenGuardSocket).on('connection', (socket) => {


        console.log('connected');
        

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
                    clientId: environment.clientId,
                }
            }
            io.emit('add-device', device);
        });
        socket.on('deleted-environment', (environmentId) => {
            io.emit('delete-device', environmentId);
        });


    });






};

