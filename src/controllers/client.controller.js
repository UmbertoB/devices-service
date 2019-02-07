const validationResult = require('express-validator/check')['validationResult'];
const clientsService = require('../services/client.service');

const clientController = {

    async getClientList(req, res) {

        try {

            let { query } = req;
            let data = await clientsService.findAllClients();


            let responseBundle = { data };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },

    async getOneClient(req, res) {

        try {

            let { id } = req.params;
            let data = await clientsService.findOneClient(id);


            let responseBundle = { data };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },

    async getClientsTotalCount(req, res) {

        try {

            const clientsTotalCount = await clientsService.countClients();

            let responseBundle = { data: clientsTotalCount }

            res.status(200).send(responseBundle)

        } catch (err) {
            res.status(400).send(err);
        }
    
    },

    async postCreateClient(req, res) {

        try {

            let { body } = req;
            let data = await clientsService.createClient(body);

            let responseBundle = { new_client: data };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },


}

module.exports = clientController;
