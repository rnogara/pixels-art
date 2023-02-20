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
    const board = JSON.parse(localStorage.getItem('board'));
    if (board) {
      this.handleSavedBoard(board);
    } else if (totalPixelArr.length === 0) {
      this.handleBoardSize(boardSize);
    }
  }

  handleSavedBoard = (savedBoard) => {
    console.log(savedBoard);
    // this.setState({
    //   totalPixelArr: [],
    // })
  }

  handleBoardChange = () => {
    const { totalPixelArr } = this.state;
    console.log(totalPixelArr);
    localStorage.setItem('board', JSON.stringify(totalPixelArr));
  }

  handleBoardSize = (value) => {
    if ( value < 5 || value > 10) {
      this.setState({
        errorMessage: 'Invalid Board Size, it must be between 5 and 10',
      });
      return;
    } else {
      this.setState({
        boardBoxWidth: (value * 40),
        boardSize: value,
        boardTotalPixel: (value * value),
        errorMessage: '',
      }, () => {
        const { boardTotalPixel } = this.state;
        const { handleBoardPixelClick } = this.props;
        const pixelArr = [];
        for (let i = 0; i < boardTotalPixel; i += 1) {
          pixelArr.push(
          <div
            className='board-pixel'
            id={ i }
            key={ i }
            onClick={ handleBoardPixelClick }
            style={{backgroundColor: '#fff'}}
          >
          </div>);
        }
        this.setState(() => ({
          totalPixelArr: pixelArr,
        }));
      })
    }
  }

  render() {
    const { boardBoxWidth, boardSize, errorMessage, totalPixelArr } = this.state;
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
        {
          errorMessage 
          ? <p>{errorMessage}</p>
          : <div
              id='board'
              style={{ width: `${boardBoxWidth}px`}}
            >
              { totalPixelArr }
            </div>
        }
      </section>
    )
  }
}

Board.propTypes = {
  handleBoardPixelClick: PropTypes.func,
}.isRequired;
