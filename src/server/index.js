const express     = require('express');
const os          = require('os');
const path        = require("path");
const publicPath  = path.join(__dirname, '../../public');
const app         = express();
const bodyParser  = require('body-parser');
const Sequelize   = require('sequelize');
const env         = require('dotenv').config();
let models        = require('./models');
const passport    = require('passport')
const session     = require('express-session');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());    
app.use(express.static(publicPath));


// For Passport
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//all routers
//Gong comment: What is this for?
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// sign in, sign up, log out
const authAPI = require('./api/api.js')(app, passport);

// get user
const getUser = require('./api/getUser.js')(app, models);

// get business
const getBusiness = require('./api/getBusiness.js')(app, models);

// get job
const getJob = require('./api/getJob.js')(app, models);

// load passport strategies
require('./middleware/passport.js')(passport, models.credentials);

//send back index.html for all the rest request
app.get('*', (req, res) => {                       
    res.sendFile(path.join(publicPath, 'index.html'));                            
  });

// connect DB
models.sequelize.sync().then(function() {
 
  console.log('Nice! Database looks fine')


}).catch(function(err) {

  console.log(err, "Something went wrong with the Database Update!")

});

//Listen for incoming requests
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
