import React from 'react';
import NavBar from './NavBar.jsx';
import PlayerInfo from './PlayerInfo.jsx';
import Stats from './Stats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Jazz stats</h1>
        <NavBar />
        <div className='grid-container'>
          <PlayerInfo />
          <Stats />
        </div>
      </div>
      
    )
  }
}

export default App;