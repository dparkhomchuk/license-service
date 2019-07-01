'use strict';

const express = require('express');

const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();

const app = express();

// [START hello_world]
// Say hello!
app.get('/', (req, res) => {
  const id = req.query.id;
  const key = datastore.key(['License',id]);
  datastore.get(key, function(err, entity) {
if(!err && entity) {
res.status(200).send('all ok');
return;
}
res.status(500);
});
});
// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
