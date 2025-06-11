const {bdd} = require('.././framework/connexion.js');
const {DataTypes} = require('sequelize');

const Reaction = bdd.define('reaction', {
    name:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    code: {
        type: DataTypes.STRING(3),
        allowNull: false
    }
});

module.exports = Reaction;