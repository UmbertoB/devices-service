const Router = require('express')
const ClientController = require('../controllers/client.controller');
const clientRouter = Router()

clientRouter.get('/', ClientController.getPatientsList);

clientRouter.post('/', ClientController.postCreateClient);

module.exports = clientRouter;