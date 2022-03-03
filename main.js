const express = require('express');
const config = require('./config');
const api = require('./api');

const app = express();

app.use(api);

app.listen(config.HTTP_PORT, () => {
  console.log('Server running on port', config.HTTP_PORT);
});
