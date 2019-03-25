const Sequelize = require('sequelize');

module.exports = (connection) => {
    return (req, res) => {
        // setup model for user
        const User =  sequelize.define('user', {
            user_ID:{
                type: Sequelize.INTEGER
            },
            user_name:{
                type: Sequelize.STRING
            },
            user_number:{
                type: Sequelize.STRING
            },
            user_email:{
                type: Sequelize.STRING
            },
            user_address:{
                type: Sequelize.STRING
            },
        })
    }
}