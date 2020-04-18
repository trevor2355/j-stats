import React from 'react';
import StatsGraph from './StatsGraph.jsx';
import StatsSelectionBar from './StatsSelectionBar.jsx';

class Stats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedStat: 'ppg',
      suggestedMax: {
        ppg: 30,
        rpg: 12,
        apg: 10,
        spg: 3,
        topg: 5,
        bpg: 2,
        mpg: 40,
        tpp: 50,
        ftp: 100,
        fgp: 60
      },
      label: {
        ppg: 'Points per Game',
        rpg: 'Rebounds per Game',
        apg: 'Assists per Game',
        spg: 'Steals per Game',
        topg: 'Turn-overs per Game',
        bpg: 'Blocks per Game',
        mpg: 'Minutes per Game',
        tpp: '3 Point %',
        ftp: 'Free-Throw %',
        fgp: 'Field-Goal %'
      }
    }
    this.changeStat = this.changeStat.bind(this);
  }

  componentDidUpdate() {
    console.log('PLAYER STATS: ', this.props.playerStats)
    var seasonsArray = this.props.playerStats.map(season => {
      return season.seasonYear;
    })
    seasonsArray = seasonsArray.reverse();

    var statArray = this.props.playerStats.map(season => {
      return season[this.state.selectedStat];
    })
    statArray = statArray.reverse();

    var ctx = document.getElementById('myChart').getContext('2d');
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: seasonsArray,
        datasets: [{
          label: this.state.label[this.state.selectedStat],
          backgroundColor: 'rgb(117,59,189)',
          // borderColor: 'rgb(0, 169, 224, 0.2)',
          data: statArray
        }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: this.state.suggestedMax[this.state.selectedStat]
                }
            }]
        }
    }
    })
  }

  changeStat(newStat) {
    this.setState({
      selectedStat: newStat
    })
  }



  render() {
    return (
      <div className='grid-item'>
        <StatsGraph />
        <StatsSelectionBar selectedStat={this.state.selectedStat} changeStat={this.changeStat}/>
      </div>
    )
  }
}

export default Stats;