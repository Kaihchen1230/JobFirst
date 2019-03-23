const express = require('express'),
      os = require('os'),
      path = require("path"),
      publicPath = path.join(__dirname, '../..', 'public'),
      app = express(),
      bodyParser = require('body-parser'),
      Sequelize = require('sequelize');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());    
app.use(express.static('dist'));

//test if the database connected
//1.You need to excute the init_database.sql locally ecerytime the db file change
//2.change the username and password inside the new Sequelize('database', 'username','password'...)
const sequelize = new Sequelize('job_first', 'root', 'lanmao8888', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

//all routers
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('*', (req, res) => {                       
    res.sendFile(path.join(publicPath, 'index.html'));                            
  });

//listen to the server on port 8080
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
