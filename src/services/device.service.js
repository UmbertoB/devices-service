const db = require("../models/index.js");


const deviceService = {

    findAllDevices() {
        return db.device.findAll({ include: [db.environment, { model: db.message, limit: 1, order: [['createdAt', 'DESC'] ] }]});
    },

    countDevices() {
        return db.device.count()
    }
}

module.exports = deviceService;
