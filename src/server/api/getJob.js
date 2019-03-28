const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return (req, res) => {
        // setup model for job
        const Job =  sequelize.define('job', {
            job_ID:{
                type: Sequelize.INTEGER
            },
            job_title:{
                type: Sequelize.STRING
            },
            job_poster:{
                type: Sequelize.INTEGER
            },
            job_description:{
                type: Sequelize.STRING
            },
            user_requirement:{
                type: Sequelize.STRING
            },
        })
    }
}