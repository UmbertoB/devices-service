const db = require("../models/index.js");


const messageService = {

    createMessage(params) {

        return db.message.create(
            {
                temperature: params.temperature,
            }
        );

    }

}

module.exports = messageService;
