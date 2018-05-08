const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { verifyFacebok } = require('./controllers/verification.js');





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(3000, () => console.log('Webhook server is listening, port 3000'));

app.get('/', verifyFacebok);











// catch 404 and forward to error handler
app.use(function(req, res, next) {


  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
