const Router = require('express')
const deviceController = require('../controllers/device.controller');
const deviceRouter = Router()

deviceRouter.get('/', deviceController.getDeviceList);


module.exports = deviceRouter;