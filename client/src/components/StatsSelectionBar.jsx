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
      <div className={'stats-selction-bar' + this.props.theme}>
        <div id='ppg' className={this.props.selectedStat === 'ppg' ? 'selected-stat' + this.props.theme: 'stat-tab' + this.props.theme} onClick={this.handleStatChange}>Points</div>
        <div id ='rpg' className={this.props.selectedStat === 'rpg' ? 'selected-stat' + this.props.theme: 'stat-tab' + this.props.theme} onClick={this.handleStatChange}>Rebounds</div>
        <div id='apg'className={this.props.selectedStat === 'apg' ? 'selected-stat' + this.props.theme: 'stat-tab' + this.props.theme} onClick={this.handleStatChange}>Assists</div>
        <div id='spg'className={this.props.selectedStat === 'spg' ? 'selected-stat' + this.props.theme: 'stat-tab' + this.props.theme} onClick={this.handleStatChange}>Steals</div>
        <div id='topg'className={this.props.selectedStat === 'topg' ? 'selected-stat' + this.props.theme: 'stat-tab' + this.props.theme} onClick={this.handleStatChange}>Turn-Overs</div>
        <div id='bpg'className={this.props.selectedStat === 'bpg' ? 'selected-stat' + this.props.theme: 'stat-tab' + this.props.theme} onClick={this.handleStatChange}>Blocks</div>
        <div id='mpg'className={this.props.selectedStat === 'mpg' ? 'selected-stat' + this.props.theme: 'stat-tab' + this.props.theme} onClick={this.handleStatChange}>Minutes</div>
        <div id='tpp'className={this.props.selectedStat === 'tpp' ? 'selected-stat' + this.props.theme: 'stat-tab' + this.props.theme} onClick={this.handleStatChange}>3P%</div>
        <div id='ftp'className={this.props.selectedStat === 'ftp' ? 'selected-stat' + this.props.theme: 'stat-tab' + this.props.theme} onClick={this.handleStatChange}>FT%</div>
        <div id='fgp'className={this.props.selectedStat === 'fgp' ? 'selected-stat' + this.props.theme: 'stat-tab' + this.props.theme} onClick={this.handleStatChange}>FG%</div>
      </div>
    )
  }
}

export default Stats;