// sample model for jobs for now
module.exports = function (sequelize, Sequelize) {
    const jobs =  sequelize.define('jobs', {
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

    return jobs;
}