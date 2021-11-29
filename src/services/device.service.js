const db = require("../models/index.js");
const listQueryBuilder = require('../utils/builders/list-query.builder');


const deviceService = {

    findAllDevices() {
        return db.device.findAll({ include: [{ model: db.environment, include: [db.client] }, { model: db.message, limit: 1, order: [['createdAt', 'DESC'] ] }]});
    },

    findAllDevicesPaginated(queryParams) {
        let queryBuilder = listQueryBuilder(queryParams);

        queryBuilder = {...queryBuilder, include: [{ model: db.environment, include: [db.client] }, { model: db.message, limit: 1, order: [['createdAt', 'DESC'] ] }] }
        
        return db.device.findAll(queryBuilder);
    }, 

    countDevices() {
        return db.device.count()
    }
}

module.exports = deviceService;
