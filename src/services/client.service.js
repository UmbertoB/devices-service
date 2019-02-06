const db = require("../models/index.js");


const ClientService = {

    findAllClients() {

        return db.client.findAll({include: [db.address, db.environment]});

    },

    createClient(params) {

        return db.client.create(
            {
                name: params.name,
                phone: params.phone,
                address: {
                    city: params.address.city,
                    district: params.address.district,
                    zip_code: params.address.zip_code,
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
