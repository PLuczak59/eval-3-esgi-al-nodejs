const {bdd} = require('.././framework/connexion.js');
const {DataTypes} = require('sequelize');

const Message = bdd.define('message',{
    content: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
});

module.exports = Message;