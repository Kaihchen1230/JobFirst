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

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },

        function (req, email, password, done) {
            const passwordHashing = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            Credentials.findOne({ where: { email: email } }).then((user) => {
                if (user) {
                    return done(null, false, { message: 'That email is already taken' });
                } else {
                    let userPassword = passwordHashing(password);
                    let data = 
                    {
                        email: email,
                        password: userPassword
                    };
                    Credentials.create(data).then((newUser, created) => {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    passport.use('local-signin', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            const Credentials = credentials;
            const checkPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }
            Credentials.findOne({ where: { email: email } }).then((user => {
                if (!user) {
                    return done(null, false, {message: 'Email does not exist' });
                }
                if(!checkPassword(user.password, password)) {
                    return done(null, false, { message: 'Incorrest password.' });
                }
                const userinfo = credentials.get();
                return done(null, userinfo);
            }).catch((err) => {
                console.log("Error:", err);
                return done(null, false, { message: 'Something went wrong with signin' });
            }));
        }

    ));

}