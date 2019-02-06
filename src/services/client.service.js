const db = require("../models/index.js");


const ClientService = {

    findAllClients() {

        return db.client.findAll({include: [{ model: db.address}, { model: db.environment, include: [db.device]}]});

    },

    createClient(params) {

        return db.client.create(
            {
                name: params.name,
                phone: params.phone,
                address: {
                    city: params.address.city,
                    district: params.address.district,
                    zipCode: params.address.zipCode,
                    street: params.address.street,
                    number: params.address.number,
                    complement: params.address.complement
                }
            },
            {
                include: [db.address]
            });

    }

}

module.exports = ClientService;
