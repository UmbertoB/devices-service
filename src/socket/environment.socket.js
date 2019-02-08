const validationResult = require('express-validator/check')['validationResult'];
const deviceService = require('../services/device.service');

const environmentSocket = {

    async environmentCreated(environment)  {

        const device = {
            id: environment.id,
            environment: {
                id: environment.id,
                title: environment.title,
                clientId: environment.clientId
            }
        }
    
        io.emit('update-devices', device);
    
    }


}

module.exports = environmentSocket;