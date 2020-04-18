import React from 'react';

const PlayerInfo = props => {
  if (props.player.lastName) {
    if (props.player.lastName === 'O Neale') {
      var lastNameLower = 'oneale'
    } else {
    var lastNameLower = props.player.lastName.toLowerCase()
    }
  }
  var playerImage = `./cut-outs/${lastNameLower || ''}-cutout.png`;
  return (
    <div className='grid-item'>
      <div className='playerOverview'>
        <div>{props.player.firstName} {props.player.lastName}</div>
      </div>
      <img src={playerImage} ></img>
      <div className='playerBasics'>
        <div>
          <div className='keyPlayerBasic'>Number:</div>
          <div className='value'>{props.player.jersey}</div>
        </div>
        <div>
          <div className='keyPlayerBasic'>Position:</div>
          <div className='value'>{props.player.pos}</div>
        </div>
        <div>
          <div className='keyPlayerBasic'>Height:</div>
          <div className='value'>{props.player.heightFeet}'{props.player.heightInches}</div>
        </div>
        <div>
          <div className='keyPlayerBasic'>Weight:</div>
          <div className='value'>{props.player.weightPounds}</div>
        </div>
        <div>
          <div className='keyPlayerBasic'>Years Pro:</div>
          <div className='value'>{props.player.yearsPro}</div>
        </div>
      </div>
    </div>
  )
}

export default PlayerInfo