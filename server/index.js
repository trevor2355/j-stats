const express = require('express');
const morgan = require('morgan');
const playersRoutes = require('./routes/players.js');
const statsRoutes = require('./routes/stats.js');
const PORT = 3010;

const app = express();

// Middleware
app.use(morgan('dev'));

// serve up the react client
app.use(express.static(`${__dirname}/../client/public`));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//handle the routes here
app.use('/players', playersRoutes);
app.use('/stats', statsRoutes);
