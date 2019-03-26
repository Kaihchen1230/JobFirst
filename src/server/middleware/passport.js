const bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, credentials) {
    const Credentials = credentials;
    const LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser((credentials, done) => {
        done(null, credentials.id);
    })

    passport.deserializeUser((id, done) => {
        Credentials.findByPk(id).then((user) => {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors.null);
            }
        });
    });

}