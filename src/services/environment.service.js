const db = require("../models/index.js");


const environmentService = {

    findAllEnvironments(clientId) { 

        let queryOptions = { include: [{ model: db.device, include: [db.message] }] };
        if (clientId) {
            queryOptions = { ...queryOptions, where: { clientId }}; 
        }

        return db.environment.findAll(queryOptions);

    },

    countEnvironments(id) {

        const option = { where: { clientId: id } };

        return db.environment.count(id ? option : {});

    },

    createEnvironment(params) {

        return db.environment.create(
            {
                title: params.title,
                clientId: params.clientId,
                device: { updateTime: params.updateTime }

            }, { include: [db.device, db.client] });

    },

    deleteEnvironment(id) {


        return db.message.destroy({
            where: { deviceId: id }
        }).then(() => {
            return db.device.destroy({
                where: { id }
            });
        });
        
    }


}

module.exports = environmentService;
