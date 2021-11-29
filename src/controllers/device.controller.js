const validationResult = require('express-validator/check')['validationResult'];
const deviceService = require('../services/device.service');
const listMetaBuilder = require('../utils/builders/list-meta.builder');

const deviceController = {

    async getDeviceList(req, res) {

        try {

            let { query } = req;
            let data = await deviceService.findAllDevices();

            let responseBundle = { data };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }

    },

    async getPaginatedDevicesList(req, res) {

        try {

            let { query } = req;
            let data = await deviceService.findAllDevicesPaginated(query);
            const total = await deviceService.countDevices();
            const count = data.length;

            const meta = listMetaBuilder(total, count, query.limit, query.page);

            let responseBundle = { data, meta };

            res.status(200).send(responseBundle);

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }

    }


}

module.exports = deviceController;
