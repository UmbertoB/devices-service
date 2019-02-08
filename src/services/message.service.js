const db = require("../models/index.js");


const messageService = {

    findAllMessages({ deviceId }) {

        return db.message.findAll({ where: { deviceId }});

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
