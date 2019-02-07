const validationResult = require('express-validator/check')['validationResult'];
const deviceService = require('../services/device.service');

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

    }


}

module.exports = deviceController;
