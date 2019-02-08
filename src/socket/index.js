'use strict';
const messageService = require('../services/message.service');


module.exports = function (io, app) {

    io.on('connection', (socket) => {

        console.log('connected');
        

        socket.on('disconnect', function () {

            console.log('disconnected');
        });

        socket.on('message-sent', async (message) => {

            io.emit('update-dashboard', message);
            
            await messageService.createMessage(message)
        });


        io.emit('dale')

    });






};

