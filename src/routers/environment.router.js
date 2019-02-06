const Router = require('express')
const environmentController = require('../controllers/environment.controller');
const environmentRouter = Router()

environmentRouter.post('/', environmentController.postCreateEnvironment);

module.exports = environmentRouter;