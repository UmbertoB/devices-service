const db = require("../models/index.js");


const environmentService = {

    findAllEnvironments(clientId) {

        return db.environment.findAll( {
            where: { clientId }, 
            include: [{ model: db.device, include: [db.message] }]
        });


    },

    createEnvironment(params) {

        return db.environment.create(
            {
                title: params.title,
                clientId: params.clientId,
                device: {}

            }, { include: [db.device]});

    },

    countEnvironments(id) {
        
        const option = { where: { clientId: id } };

        return db.environment.count( id ? option : {});

    }

}

module.exports = environmentService;
