// this is the index file for out models
// its purpose is for setting up the models

"use strict";
 
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};
 
 
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
 
 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

function connect() {
    return new Promise((resolve, reject) => {
        sequelize.sync({
            logging: false,
            //force: true, // will deletes all data and replace them
            //alter: true // will delete data only neccessary
        }).then(() => {
            console.info('DB server connection started');
            return resolve(sequelize);
        }).catch((err) => {
            console.error('Error setting up tables');
            console.error(err);
            process.exit(1);
        });
    });
}
 
module.exports = db;