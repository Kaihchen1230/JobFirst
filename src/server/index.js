const express = require('express');
const os = require('os');
var path = require("path");
const publicPath = path.join(__dirname, '../..', 'public');
const app = express();
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// credential
// host     : '127.0.0.1',
// user     : 'root',
// password : '',
// database : ',

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('WebRing', 'root', 'lanmao8888', {
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

app.get('*', (req, res) => {                       
    res.sendFile(path.join(publicPath, 'index.html'));                            
  });
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
