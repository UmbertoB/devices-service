const db = require("../models/index.js");


const messageService = {

    findAllClientMessages({ clientId }) {

        return db.message.findAll({ order: [ [ 'createdAt', 'DESC' ] ], include: [ { model: db.device, attributes: ['id'] , include: [ { model: db.environment, attributes: ['id', 'clientId'], where: { clientId } } ]} ]});

    },

    findAllDeviceMessages({ deviceId }) {

        return db.message.findAll({ order: [ [ 'createdAt', 'DESC' ] ], where: { deviceId } });

    },
    
    createMessage(params) {

        return db.message.create(
            {
                temperature: params.temperature,
                deviceId: params.deviceId
            }
        );

    }

}

module.exports = messageService;
