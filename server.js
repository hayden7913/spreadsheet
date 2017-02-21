const express = require('express')
const bp = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require('./config');

app.use(bp.urlencoded({
  extended: true
}));
app.use(bp.json());
/*app.use(express.static(__dirname + '/public'));
*/
const state = {
  position: null
}

app.get('/', (req, res) => {
  res.send('test success');
});

app.get('/test', (req, res) => {
  res.send({test: "success"})
});

app.post('/test', (req, res) => {
  console.log(req.body);
  state.position = req.body.position;
  console.log(state);
});

let server;

function runServer(databaseUrl=DATABASE_URL, port=PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}


function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
