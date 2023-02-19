import React, { Component } from 'react';
import Board from './Board';
import Pallete from './Pallete';

export default class MainContent extends Component {
  state = {
    pickedColor: '',
  }

  handlePalleteClick = (color) => {
    this.setState({
      pickedColor: color,
    })
  }

  handleBoardPixelClick = ({ target }) => {
    const { pickedColor } = this.state;
    if (pickedColor) {
      target.style.backgroundColor = pickedColor;
    }
  }

  render() {
    return (
      <>
      <Pallete handlePalleteClick={ this.handlePalleteClick } />
      <Board handleBoardPixelClick={ this.handleBoardPixelClick } />
      </>
    )
  }
}
