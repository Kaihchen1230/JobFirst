const express = require('express');
const os = require('os');
var path = require("path");
const publicPath = path.join(__dirname, '../..', 'public');
const app = express();
let name =2;
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('*', (req, res) => {                       
    res.sendFile(path.join(publicPath, 'index.html'));                            
  });
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
