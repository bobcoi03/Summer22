const express = require('express');
const app = express();
const PORT_NUMBER = process.env.PORT || 5000;
const router = require('./src/routes/routes.js');
const path = require('path');
// const sequelizer = require('./src/utils/database.js');

app.use(express.static(__dirname + '/src/public'));
console.log(__dirname);

app.use(router);

// sequelizer.sync();

app.listen(PORT_NUMBER, () => {
  console.log(`server started at port ${PORT_NUMBER}`);
})




