const messageService = require('../services/message.service');

const messageSocket = {

    async deviceMessageSent(message) {

        io.emit('update-dashboard', message);

        await messageService.createMessage(message)
    
    }

}

module.exports = messageSocket;