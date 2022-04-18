const express = require('express');
const app = express();
const PORT_NUMBER = 5000;
const hello_world = require('./src/routes/hello_world');

app.use('/', hello_world);

app.listen(PORT_NUMBER, () => {
  console.log(`server started at port ${PORT_NUMBER}`);
});