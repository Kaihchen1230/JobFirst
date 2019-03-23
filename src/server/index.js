const express = require('express'),
      os = require('os'),
      path = require("path"),
      fs = require('fs'),
      publicPath = path.join(__dirname, '../..', 'public'),
      app = express(),
      bodyParser = require('body-parser'),
      Sequelize = require('sequelize');
      

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());    
app.use(express.static(publicPath));

//Tutorial
//1.You need to excute the init_database.sql locally everytime the db file change
//  Here is tutorial for setup mysql https://mariadb.com/resources/blog/installing-mariadb-10-1-16-on-mac-os-x-with-homebrew/
//2.change the username and password inside the new Sequelize('database', 'username','password'...)
//3.npm install  npm run dev
//4.open http://localhost:3000
//4.You should only change code inside src folder;If you want to change some setting, plz be careful
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

//Listen for incoming requests
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));