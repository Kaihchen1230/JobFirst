const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return (req, res) => {
        // setup model for business
        const Business =  sequelize.define('business', {
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
    
    }
}