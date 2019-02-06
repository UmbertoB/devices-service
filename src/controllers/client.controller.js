const validationResult = require('express-validator/check')['validationResult'];
const clientService = require('../services/client.service');

const ClientController = {

    async getPatientsList(req, res) {

        try {

            let { query } = req;
            let data = await clientService.findAllClients();


            let responseBundle = { data };

            res.status(200).send(responseBundle);

        } catch (err) {
            console.log(err);
            
            res.status(400).send({ error: true, msg: err.name });
        }
    },

    async postCreateClient(req, res) {

        try {

            let { body } = req;
            let data = await clientService.createClient(body);


            let responseBundle = { data };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },


}

module.exports = ClientController;
