const express = require('express');
const app = express();
const router = express.Router();

const fields = require('./routes/fields');

app.use('/', fields);

app.use(express.static((__dirname +'/view/')));
app.get('/',function(req,res){
  res.sendFile((__dirname +'/index.html'));
});

module.exports = app;