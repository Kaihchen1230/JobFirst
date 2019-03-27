module.exports = function (app, passport) {
    app.post('/api/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup'
    }));

    app.post('/api/signin', passport.authenticate('local-signin', {
        successRedirect: '/',
        failureRedirect: '/signin'
    }));

    app.post('/api/logout', (req, res) => {
        req.session.destroy((err) => {
            res.redirect('/')
        });
    });

    // this is a middleware to verify the route has to be logged in to use
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}