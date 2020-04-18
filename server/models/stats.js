const db = require('../db/connection.js')

const selectPlayerStats = (personId) => {
  return new Promise((resolve, reject) => {
    var queryString = `SELECT * FROM stats WHERE personId = ${personId}`
    db.query(queryString, (err, results) => {
      if (err) {
        reject(err)
      } else {
        resolve(results);
      }
    })
  })
}

module.exports = { 
  selectPlayerStats
};