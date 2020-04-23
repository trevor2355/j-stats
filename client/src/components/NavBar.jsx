import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayPlayers: false,
      playersDropDownText: 'Players ▾'
    }
    this.togglePlayerList = this.togglePlayerList.bind(this);
    this.handlePlayerSelection = this.handlePlayerSelection.bind(this);
  }

  togglePlayerList(event) {
    var toggle = !this.state.displayPlayers
    if(this.state.displayPlayers) {
      this.setState({
        displayPlayers: toggle,
        playersDropDownText: 'Players ▾'
      })
    } else {
      this.setState({
        displayPlayers: toggle,
        playersDropDownText: 'Players ▴'
      })
    }
  }

  handlePlayerSelection(event) {
    var personId = event.target.value
    this.props.displayPlayer(personId);
    this.setState({
      displayPlayers: false,
      playersDropDownText: 'Players ▾'
    })
  }

  render() {
    var playerList
    if (this.state.displayPlayers === true) {
      playerList = (
        <div className={'player-selector-container' + this.props.theme}>
          {this.props.players.map(player => {
            return (
              <li className={'player-name-selection' + this.props.theme} value={player.personId} key={player.id} onClick={this.handlePlayerSelection}>{player.firstName} {player.lastName}</li>
            )
          })}
        </div>
      )
    }
    return (
      <div>
        <ul className={'NavBar' + this.props.theme}>
          <li className={'NavBarItems' + this.props.theme} onClick={this.togglePlayerList}>{this.state.playersDropDownText}</li>
        </ul>
        {playerList}
      </div>
    )
  }
}

export default NavBar