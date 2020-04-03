import React from 'react';

const PlayerInfo = props => {
  return (
    <div className='grid-item'>
      <div className='playerOverview'>
        <div>Jordan Clarkson</div>
      </div>
      <img src='./cut-outs/clarkson-cutout.png'></img>
      <div className='playerBasics'>
        <div>
          <div className='keyPlayerBasic'>Number:</div>
          <div className='value'>00</div>
        </div>
        <div>
          <div className='keyPlayerBasic'>Position:</div>
          <div className='value'>Guard</div>
        </div>
        <div>
          <div className='keyPlayerBasic'>Height:</div>
          <div className='value'>6'4</div>
        </div>
        <div>
          <div className='keyPlayerBasic'>Weight:</div>
          <div className='value'>190</div>
        </div>
        <div>
          <div className='keyPlayerBasic'>Years Pro:</div>
          <div className='value'>7</div>
        </div>
      </div>
    </div>
  )
}

export default PlayerInfo