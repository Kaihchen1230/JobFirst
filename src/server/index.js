const express = require('express'),
      os = require('os'),
      path = require("path"),
      fs = require('fs'),
      publicPath = path.join(__dirname, '../..', 'public'),
      app = express(),
      bodyParser = require('body-parser'),
      Sequelize = require('sequelize');
      port = process.env.PORT || 8080;

process.env.PORT = process.env.PORT || port;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());    
app.use(express.static('dist'));

//Tutorial
//1.You need to excute the init_database.sql locally ecerytime the db file change
//  Here is tutorial for setup mysql https://mariadb.com/resources/blog/installing-mariadb-10-1-16-on-mac-os-x-with-homebrew/
//2.change the username and password inside the new Sequelize('database', 'username','password'...)
//3.npm install  npm run dev
//4.open http://localhost:3000
//4.You should only change code inside src folder;If you want to change some setting, plz be careful
const sequelize = new Sequelize('job_first', '[username]', '[passward]', {
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

//Listen for incoming requests
const server = app.listen(port, () => {
  console.log('Server is up on local host 3000');
})