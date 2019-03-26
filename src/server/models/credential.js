module.exports = function (sequelize, Sequelize) {
    const credential = sequelize.define('credential', {
        id: {
            type : Sequelize.UUID,
            defaultValue : Sequelize.UUIDV4,
            primaryKey: true
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });

    return credential;
}