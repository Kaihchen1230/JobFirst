module.exports = function (sequelize, Sequelize) {
    const credentials = sequelize.define('credentials', {
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

    return credentials;
}