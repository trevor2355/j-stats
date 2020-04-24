import React from 'react';

const PlayerInfo = props => {
  if (props.player.lastName) {
    if (props.player.lastName === 'O Neale') {
      var lastNameLower = 'oneale'
    } else {
    var lastNameLower = props.player.lastName.toLowerCase()
    }
  }
  var playerImage = `./cut-outs/${lastNameLower || ''}${props.theme}-cutout.png`;
  return (
    <div className={'grid-item' + props.theme}>
      <div className={'playerOverview' + props.theme}>
        <div>{props.player.firstName} {props.player.lastName}</div>
      </div>
      <img src={playerImage} ></img>
      <div className={'playerBasics' + props.theme}>
        <div>
          <div className={'keyPlayerBasic' + props.theme}>Number:</div>
          <div className={'value' + props.theme}>{props.player.jersey}</div>
        </div>
        <div>
          <div className={'keyPlayerBasic' + props.theme}>Position:</div>
          <div className={'value' + props.theme}>{props.player.pos}</div>
        </div>
        <div>
          <div className={'keyPlayerBasic' + props.theme}>Height:</div>
          <div className={'value' + props.theme}>{props.player.heightFeet}'{props.player.heightInches}</div>
        </div>
        <div>
          <div className={'keyPlayerBasic' + props.theme}>Weight:</div>
          <div className={'value' + props.theme}>{props.player.weightPounds}</div>
        </div>
        <div>
          <div className={'keyPlayerBasic' + props.theme}>Years Pro:</div>
          <div className={'value' + props.theme}>{props.player.yearsPro}</div>
        </div>
      </div>
    </div>
  )
}

export default PlayerInfo