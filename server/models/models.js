const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
})
const Ticket = sequelize.define('ticket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    numPlat: {type: DataTypes.INTEGER},
    date: {type: DataTypes.STRING},
    ls: {type: DataTypes.INTEGER},
    sum: {type: DataTypes.FLOAT},
    pok1: {type: DataTypes.INTEGER},
    numFilial: {type: DataTypes.INTEGER},
    numOperatora: {type: DataTypes.INTEGER},
    numTicket: {type: DataTypes.INTEGER},
    sumKomissii: {type: DataTypes.FLOAT},
    pok2: {type: DataTypes.INTEGER},
})

User.hasMany(Ticket)
Ticket.belongsTo(User)

module.exports = {
    User,
    Ticket,
}