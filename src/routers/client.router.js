const Router = require('express')
const clientController = require('../controllers/client.controller');
const clientRouter = Router()

clientRouter.get('/', clientController.getClientList);

clientRouter.get('/:id', clientController.getOneClient);

clientRouter.post('/', clientController.postCreateClient);

module.exports = clientRouter;