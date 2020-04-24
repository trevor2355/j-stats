const db = require('../db/connection.js')

const selectPlayers = () => {
  return new Promise((resolve, reject) => {
    var queryString = 'SELECT * FROM players';
    db.query(queryString, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
    })
  })
}

module.exports = {
  selectPlayers
};