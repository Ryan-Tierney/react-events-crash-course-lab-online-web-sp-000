import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
handleMouseMove = (event) => { 
  drawChromeBoiAtCoords(event.clientX, event.clientY)
}

handleKeyDown = (event) => {
  if (event.key === 'a') {
    resize('+')
  } else if (event.key === 's') {
    resize('-')
<<<<<<< HEAD
  }
}

render() {
  return (
    <canvas 
    onMouseMove={this.handleMouseMove}
    onClick={() => {toggleCycling()}}
    onKeyDown={this.handleKeyDown}
    width='900'
    height='600'
    tabIndex="0">
    </canvas>
    )
  }
=======
  }
}

render() {
  return (
    <canvas 
    onMouseMove={this.handleMouseMove}
    onClick={() => {toggleCycling()}}
    onKeyDown={this.handleKeyDown}
    width='900'
    height='600'
    tabIndex="0">
    </canvas>
    )
>>>>>>> 9dc2f3d69b0203c66235fafef6f9f4bfb73ff891
}