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
      playerStats: [],
      theme: '-desert',
      backgroundColor: '#921f1e',
      borderColor: '#921f1e'
    }
    this.displayPlayer = this.displayPlayer.bind(this);
    this.themeChange = this.themeChange.bind(this);
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
      .catch(err => {
        console.log(err);
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
        })
      })
      .catch(err => {
        console.log(err);
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

  themeChange() {
    if (this.state.theme === '-purple') {
      var newTheme = '-desert'
    } else {
      var newTheme = '-purple'
    }
    this.setState({
      theme: newTheme
    }, () => this.setGraphcolor())
  }

  setGraphcolor() {
    var backgroundColor;
    var borderColor;
    if (this.state.theme === '-purple') {
      backgroundColor = 'rgb(117, 59, 189)',
      borderColor = 'rgb(0, 98, 114)';
    } else {
      backgroundColor = '#921f1e',
      borderColor = 'rgb(64, 32, 34)'
    }
    this.setState({
      backgroundColor,
      borderColor
    })
  }

  render() {
    return (
      <div className={'background-img' + this.state.theme}>
        <img className={'J' + this.state.theme} src={'https://j-stats.s3-us-west-1.amazonaws.com/logo' + this.state.theme + ".png"} onClick={this.themeChange}></img>
        <NavBar players={this.state.players} displayPlayer={this.displayPlayer} theme={this.state.theme}/>
        <div id={'absolute-grid-container' + this.state.theme}>
          <div className={'grid-container' + this.state.theme} >
            <PlayerInfo player={this.state.displayedPlayer} theme={this.state.theme}/>
            <Stats playerStats={this.state.playerStats} theme={this.state.theme} backgroundColor={this.state.backgroundColor} borderColor={this.state.borderColor}/>
          </div>
        </div>
      </div>
      
    )
  }
}

export default App;