const db = require("../models/index.js");


const deviceService = {

    findAllDevices() {

        return db.device.findAll({ include: [{ model: db.environment } ]});
    }
}

module.exports = deviceService;
