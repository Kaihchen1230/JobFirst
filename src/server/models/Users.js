// sample model for users for now
module.exports = function (sequelize, Sequelize) {
    const users =  sequelize.define('users', {
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

    return users;
}