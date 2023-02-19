import React, { Component } from 'react';
import '../styles/Pallete.css';

export default class Pallete extends Component {
  state = {
    palleteColors: ['rgb(0, 0, 0)'],
    randomPickedColor: '',
  }

  componentDidMount() {
    this.randomColor();
  }

  componentDidUpdate() {
    const { palleteColors } = this.state;
    if (palleteColors.length < 5) {
      this.randomPalleteColor();
    }
  }

  randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    this.setState({
      randomPickedColor: `rgb(${r}, ${g}, ${b})`,
    });
  }

  randomPalleteColor = () => {
    const { palleteColors, randomPickedColor } = this.state
    const colorPallete = JSON.parse(localStorage.getItem('colorPallete'));
    if (colorPallete) {
      this.setState({
        palleteColors: colorPallete,
      });
      return;
    }
    const colorCheck = palleteColors.some((color) => color === randomPickedColor);
    if (!colorCheck) {
      this.setState((prevState) => ({
        palleteColors: [...prevState.palleteColors, randomPickedColor],
      }), () => {
        const { palleteColors } = this.state;
        if (palleteColors.length === 5) {
          localStorage.setItem('colorPallete', JSON.stringify(palleteColors));
        }
      });
    }
    this.randomColor();
  }

  handlePalleteColoursBtn = () => {
    localStorage.removeItem('colorPallete');
    this.setState({
      palleteColors: ['rgb(0, 0, 0)'],
    })

  }

  render() {
    const { palleteColors } = this.state;
    return (
      <section className='pallete'>
        {
          palleteColors.map((color, index) => (
            <div
              key={ index }
              style={{backgroundColor: color}}
              // onClick={ this.handlePalleteClick }
            >
            </div>)
          )
        }
        <button
          type='button'
          id="new-random-colours"
          onClick={ this.handlePalleteColoursBtn }
        >
        New Random Colours
        </button>
      </section>
    )
  }
}
