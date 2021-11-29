const jwt = require('jsonwebtoken');
const _jwtSecret = '0.rfyj3n9nzh';

module.exports = function (socket, next) {

    if (socket.handshake.query && socket.handshake.query.token) {

        let token = socket.handshake.query.token;

        token = token.split(' ')[1]

        jwt.verify(token, _jwtSecret, function (err, decoded) {

            if (err) return next(new Error('Authentication error'));

            socket.decoded = decoded;

            next();

        });

    } else {
        next(new Error('Authentication error'));
    }

}