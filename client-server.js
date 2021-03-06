
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config');
const bp = require('body-parser');
const app = express();
const compiler = webpack(config);

app.use(bp.urlencoded({
  extended: true
}));
app.use(bp.json());



app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/test', (req, res) => {
  res.send({test: "success"})
});

app.post('/test', (req, res) => {
  console.log(req.body);
  /*state.position = req.body.position;
  console.log(state);*/
});


app.listen(8080, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
