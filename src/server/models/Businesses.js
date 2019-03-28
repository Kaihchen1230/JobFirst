// sample model for business for now
module.exports = function (sequelize, Sequelize) {
    const businesses =  sequelize.define('businesses', {
        business_ID:{
            type: Sequelize.INTEGER
        },
        business_name:{
            type: Sequelize.STRING
        },
        business_number:{
            type: Sequelize.STRING
        },
        business_email:{
            type: Sequelize.STRING
        },
        business_location:{
            type: Sequelize.STRING
        },
    });

    return businesses;
}