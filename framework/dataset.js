const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const dataset = async () => {
    await User.create({
        email: "pluczak@myges.fr",
        password: bcrypt.hashSync('Password123!',10),
        nickname: "pluczak" 
    });
}

module.exports = dataset;