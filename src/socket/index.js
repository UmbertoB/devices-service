'use strict';

module.exports = function (io, app) {

    setInterval(() => {

        io.emit('message-received', {
            device: 34,
            temperature: 25,
            created_at: '2019-02-06T16:41:56.000Z'
        });

    }, 3000);




};

