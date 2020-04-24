import React from 'react';
import Chart from 'chart.js';

const StatsGraph = props => {
  return (
    <div className={'stats-container' + props.theme}>
      <canvas id='myChart'></canvas>
    </div>

  )
}

export default StatsGraph