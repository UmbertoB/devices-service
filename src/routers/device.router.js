const Router = require('express');
const deviceController = require('../controllers/device.controller');
const deviceRouter = Router();

deviceRouter.get('/', deviceController.getDeviceList);

deviceRouter.get('/paginated', deviceController.getPaginatedDevicesList);


module.exports = deviceRouter;