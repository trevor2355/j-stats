import React from 'react';
import NavBar from './NavBar.jsx';
import PlayerInfo from './PlayerInfo.jsx';
import Stats from './Stats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [],
      displayedPlayer: {},
      playerStats: []
    }
    this.displayPlayer = this.displayPlayer.bind(this);
  }

  componentDidMount() {
    this.getAllPlayers();
  }

  getAllPlayers() {
    fetch('/players')
      .then(response => {
        return response.json()
      })
      .then(players => {
        this.setState({
          players
        }, () => this.displayRandom())
      })
  }

  getPlayerStats(personId) {
    fetch(`/stats/${personId}`)
      .then(response => {
        return response.json()
      })
      .then(playerStats => {
        this.setState({
          playerStats
        }, () => console.log(this.state.playerStats))
      })
  }

  displayRandom() {
    var random = Math.floor(Math.random() * this.state.players.length);
    this.setState({
      displayedPlayer: this.state.players[random]
    }, () => this.getPlayerStats(this.state.displayedPlayer.personId))
  }

  displayPlayer(personId) {
    var players = this.state.players
    for (var i = 0; i < players.length; i++) {
      if (players[i].personId === personId) {
        this.setState({
          displayedPlayer: players[i]
        }, () => this.getPlayerStats(this.state.displayedPlayer.personId))
        return
      }
    }
  }

  render() {
    return (
      <div>
        <img className ='J' src="mountainJ.png"></img>
        <NavBar players={this.state.players} displayPlayer={this.displayPlayer}/>
        <div id='absolute-grid-container'>
          <div className='grid-container'>
            <PlayerInfo player={this.state.displayedPlayer} />
            <Stats playerStats={this.state.playerStats}/>
          </div>
        </div>
      </div>
      
    )
  }
}

export default App;