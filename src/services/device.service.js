const db = require("../models/index.js");


const deviceService = {

    findAllDevices() {

        return db.device.findAll({ include: [db.environment]});

    }
}

module.exports = deviceService;
