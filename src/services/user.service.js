const jwt = require('jsonwebtoken');
const db = require("../models/index.js");
const bcrypt = require('bcryptjs')

const _jwtSecret = '0.rfyj3n9nzh'

const UserService = {

    createUser({ email, password, name }) {

        password = bcrypt.hashSync(password);

        return db.user.create({ email, password, name });

    },

    login(email) {

        return db.user.findOne({ where: { email } })
            .then(user => {
                if (!user) throw 'erro';

                const { id, email } = user;
                return { user, token: jwt.sign({ id, email }, _jwtSecret) }

            })
            .catch(e => {
                console.log(e);
            });
    },

    verifyToken(token) {
        return new Promise((resolve) => {
            jwt.verify(token, _jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false);
                    return;
                }

                UserService._user = db.user.findByPk(decoded['id']);
                resolve(true)
                return;
            })
        });
    }

}

module.exports = UserService;
