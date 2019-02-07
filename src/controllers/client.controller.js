const validationResult = require('express-validator/check')['validationResult'];
const clientService = require('../services/client.service');

const clientController = {

    async getClientList(req, res) {

        try {

            let { query } = req;
            let data = await clientService.findAllClients();


            let responseBundle = { data };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },

    async getOneClient(req, res) {

        try {

            let { id } = req.params;
            let data = await clientService.findOneClient(id);


            let responseBundle = { data };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },

    async postCreateClient(req, res) {

        try {

            let { body } = req;
            let data = await clientService.createClient(body);


            let responseBundle = { new_client: data };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },


}

module.exports = clientController;
