const validationResult = require('express-validator/check')['validationResult'];
const environmentService = require('../services/environment.service');

const environmentController = {

    async postCreateEnvironment(req, res) {

        try {

            let { body } = req;
            let data = await environmentService.createEnvironment(body);


            let responseBundle = { data };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },

}

module.exports = environmentController;
