import React from 'react';
import StatsGraph from './StatsGraph.jsx'

class Stats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className='grid-item'>
        <h2>Stats</h2>
        <StatsGraph />
      </div>
    )
  }
}

export default Stats;