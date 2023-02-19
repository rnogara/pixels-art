import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Board.css';

export default class Board extends Component {
  state = {
    boardBoxWidth: 200,
    boardSize: 5,
    boardTotalPixel: 25,
    errorMessage: '',
    totalPixelArr: [],
  }

  componentDidMount() {
    const { totalPixelArr, boardSize } = this.state;
    if (totalPixelArr.length === 0) {
      this.handleBoardSize(boardSize);
    }
  }

  handleBoardSize = (value) => {
    if ( value < 5 && value > 50) {
      this.setState({
        errorMessage: 'Invalid Board Size, it must be higher than 5 and less than 50',
      })
    } else {
      this.setState({
        boardBoxWidth: (value * 40),
        boardSize: value,
        boardTotalPixel: (value * value),
      }, () => {
        const { boardTotalPixel } = this.state;
        const pixelArr = [];
        for (let i = 0; i < boardTotalPixel; i += 1) {
          pixelArr.push(i);
        }
        this.setState(() => ({
          totalPixelArr: pixelArr,
        }));
      })
    }
  }

  render() {
    const { boardBoxWidth, boardSize, totalPixelArr } = this.state;
    const { handleBoardPixelClick } = this.props;
    return (
      <section>
        <label htmlFor='board-size'>
          <input
            id='board-size'
            type='number'
            onChange={ (e) => this.handleBoardSize(e.target.value) }
            value={ boardSize }
          />
          x Board Size
        </label>
        <div id='board' style={{ width: `${boardBoxWidth}px`}}>
          { totalPixelArr.map((index) => (
              (<div
              className='board-pixel'
              id={ index }
              key={ index }
              onClick={ handleBoardPixelClick }
              style={{backgroundColor: '#fff'}}
            >
            </div>)
          )) }
        </div>
      </section>
    )
  }
}

Board.propTypes = {
  handleBoardPixelClick: PropTypes.func,
}.isRequired;
