const db = require("../models/index.js");


const environmentService = {

    createEnvironment(params) {

        return db.environment.create(
            {
                title: params.title,
                clientId: params.clientId,
                device: {}

            }, { include: [db.device]});

    }

}

module.exports = environmentService;
