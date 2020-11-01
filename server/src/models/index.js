const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

//connect database
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs.readdirSync(__dirname)
    .filter(file => file.indexOf(".") !== 0 && file !== "index.js") 
    .forEach(file => {
        const model = require('./' + file)(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
    });

db.sequelize = sequelize
db. Sequelize = Sequelize


module.exports = db