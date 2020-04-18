import React from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
    this.handleStatChange = this.handleStatChange.bind(this);
  }

  handleStatChange(event) {
    this.props.changeStat(event.target.id)
  }

  render() {
    return (
      <div className='stats-selction-bar'>
        <span id='ppg' className={this.props.selectedStat === 'ppg' ? 'selected-stat': 'stat-tab'} onClick={this.handleStatChange}>Points</span>
        <span id ='rpg' className={this.props.selectedStat === 'rpg' ? 'selected-stat': 'stat-tab'} onClick={this.handleStatChange}>Rebounds</span>
        <span id='apg'className={this.props.selectedStat === 'apg' ? 'selected-stat': 'stat-tab'} onClick={this.handleStatChange}>Assists</span>
        <span id='spg'className={this.props.selectedStat === 'spg' ? 'selected-stat': 'stat-tab'} onClick={this.handleStatChange}>Steals</span>
        <span id='topg'className={this.props.selectedStat === 'topg' ? 'selected-stat': 'stat-tab'} onClick={this.handleStatChange}>Turn-Overs</span>
        <span id='bpg'className={this.props.selectedStat === 'bpg' ? 'selected-stat': 'stat-tab'} onClick={this.handleStatChange}>Blocks</span>
        <span id='mpg'className={this.props.selectedStat === 'mpg' ? 'selected-stat': 'stat-tab'} onClick={this.handleStatChange}>Minutes</span>
        <span id='tpp'className={this.props.selectedStat === 'tpp' ? 'selected-stat': 'stat-tab'} onClick={this.handleStatChange}>3P%</span>
        <span id='ftp'className={this.props.selectedStat === 'ftp' ? 'selected-stat': 'stat-tab'} onClick={this.handleStatChange}>FT%</span>
        <span id='fgp'className={this.props.selectedStat === 'fgp' ? 'selected-stat': 'stat-tab'} onClick={this.handleStatChange}>FG%</span>
      </div>
    )
  }
}

export default Stats;