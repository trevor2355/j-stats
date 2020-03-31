const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3010;

//Middleware
app.use(morgan('dev'));

//serve up the react client
app.use(express.static(__dirname + '/../client/public'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
