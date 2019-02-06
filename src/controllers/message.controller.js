const validationResult = require('express-validator/check')['validationResult'];
const messageService = require('../services/message.service');

const messageController = {

    async postCreateMessage(req, res) {

        try {

            let { body } = req;
            let data = await messageService.createMessage(body);


            let responseBundle = { data };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },

}

module.exports = messageController;
