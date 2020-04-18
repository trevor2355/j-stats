const playerModel = require('../models/players.js')

const getAllPlayers = (req, res) => {
  playerModel.selectPlayers()
    .then(players => {
      var playersFiltered = players.filter(player => player.personId != 1629625 && player.personId !=1628430 && player.personId !=1629671 && player.personId !=1629752 && player.personId !=1629714)
      res.status(200).json(playersFiltered)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  getAllPlayers
}