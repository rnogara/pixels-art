import React, { Component } from 'react';
import Board from './Board';
import Pallete from './Pallete';

export default class MainContent extends Component {
  state = {
    pickedColor: '',
    paintedBoard: [],
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
      const pixel = { id: target.id, bg: pickedColor }
      this.setState((prevState) => ({
        paintedBoard: [...prevState.paintedBoard, pixel]
      }));
    }
    
  }

  render() {
    const { paintedBoard } = this.state;
    return (
      <>
      <Pallete handlePalleteClick={ this.handlePalleteClick } />
      <Board handleBoardPixelClick={ this.handleBoardPixelClick } paintedBoard={paintedBoard}/>
      </>
    )
  }
}
