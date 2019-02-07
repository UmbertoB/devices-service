const validationResult = require('express-validator/check')['validationResult'];
const environmentService = require('../services/environment.service');

const environmentController = {

    /**
     * GET ALL (filtered by client or not)
    * Get total environments or all from a specified client ( ?clientId=:id )
    * @param {Request} req 
    * @param {Response} res 
    */
    async getEnvironmentsList(req, res) {

        let { clientId } = req.query;

        const data = await environmentService.findAllEnvironments(clientId);

        res.status(200).send({ data });

    },

    /**
     * GET COUNT (filtered by client or not)
     * Get total environments or all from a specified client ( ?clientId=:id )
     * @param {Request} req 
     * @param {Response} res 
     */
    async getClientEnvironmentsTotalCount(req, res) {

        let { clientId } = req.query;

        const data = await environmentService.countEnvironments(clientId);

        res.status(200).send({ data });

    },

    /**
     * CREATE ENVIRONMENT (filtered by client or not)
     * Creates a environment bounded to a client
     * @param {Request} req 
     * @param {Response} res 
     */
    async postCreateEnvironment(req, res) {

        try {

            const { body } = req;
            const data = await environmentService.createEnvironment(body);

            res.status(200).send({ new_environment: data });

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },

}

module.exports = environmentController;
