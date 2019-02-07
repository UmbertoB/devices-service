const Router = require('express')
const environmentController = require('../controllers/environment.controller');
const environmentRouter = Router()

environmentRouter.get('/', environmentController.getEnvironmentsList);

environmentRouter.get('/counter', environmentController.getClientEnvironmentsTotalCount);

environmentRouter.post('/', environmentController.postCreateEnvironment);

module.exports = environmentRouter;