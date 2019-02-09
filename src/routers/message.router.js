const Router = require('express')
const messageController = require('../controllers/message.controller');
const messageRouter = Router()

messageRouter.get('/:clientId', messageController.getMessagesList);

messageRouter.post('/', messageController.postCreateMessage);

module.exports = messageRouter;