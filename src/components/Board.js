import React, { Component } from 'react';
import '../styles/Board.css';

export default class Board extends Component {
  state = {
    boardSize: 5,
    boardBoxWidth: 200,
    errorMessage: '',
  }

  handleBoardSize = ({ target: { value } }) => {
    if ( value < 5) {
      this.setState({
        errorMessage: 'Invalid Board Size, it must be higher than 5px',
      })
    } else {
      this.setState({
        boardSize: value,
      })
    }
  }

  render() {
    const { boardSize } = this.state;
    return (
      <section style={{}}>
        <label htmlFor='board-size'>
          <input
            id='board-size'
            type='number'
            onChange={ this.handleBoardSize }
            value={ boardSize }
          />
          x Board Size
        </label>

      </section>
    )
  }
}
