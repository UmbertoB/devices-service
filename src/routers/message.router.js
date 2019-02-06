const Router = require('express')
const messageController = require('../controllers/message.controller');
const messageRouter = Router()

messageRouter.post('/', messageController.postCreateMessage);

module.exports = messageRouter;