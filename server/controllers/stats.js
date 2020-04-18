const statsModel = require('../models/stats.js')

const getPlayerStats = (req, res) => {
  var personId = req.params.personId;
  statsModel.selectPlayerStats(personId)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(`could not find stats for player with personId ${personId}`)
    })
}

module.exports = {
  getPlayerStats
}