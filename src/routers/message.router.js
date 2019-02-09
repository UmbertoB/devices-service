const Router = require('express')
const messageController = require('../controllers/message.controller');
const messageRouter = Router()

messageRouter.get('/:clientId/clients', messageController.getClientMessagesList);

messageRouter.get('/:deviceId/devices', messageController.getDeviceMessagesList);

messageRouter.post('/', messageController.postCreateMessage);

module.exports = messageRouter;