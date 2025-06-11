const { bdd } = require('./connexion.js');
const User = require("../model/user.model.js");
const Message = require("../model/message.model.js");
const Reaction = require("../model/reaction.model.js");

const sync = async () => {

    // lien message - user
    Message.belongsTo(User);
    User.hasMany(Message);

    // lien message - reaction
    Message.belongsToMany(Reaction, {through: 'message_has_reaction'});

    // lien user - reaction
    User.hasMany(Reaction);
    Reaction.belongsTo(User);

    await bdd.sync({ force: true });
}

module.exports = sync;
