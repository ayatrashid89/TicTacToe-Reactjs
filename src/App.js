import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      border: Array(9).fill(null),
      player1: <img src={require('./dog.png')} alt="dog" />,
      player2: <img src={require('./cat.png')} alt="cat" />,
      currentPlayer: null,
      winner: null,
    }

  }

  checkWinner() {

    let checkWinner = [

      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],

      ["0", "3", "6"],
      ["8", "4", "0"],


      ["1", "4", "7"],
      ["2", "4", "6"],
      ["2", "5", "8"]
    ]

    for (let index = 0; index < checkWinner.length; index++) {
      const [a, b, c] = checkWinner[index]

      if (this.state.border[a] && this.state.border[a] === this.state.border[b] && this.state.border[a] === this.state.border[c]) {


        this.setState({
          winner: this.state.currentPlayer
        })


      }
    }

  }

  returnDiv() {
    return (


      <p>You won !</p>


    )
  }


  reset() {

    this.setState({
      player: null,
      winner: null,
      border: Array(9).fill(null)

    })
  }


  resetButton() {

    this.reset()

  }


  handleClick(index) {
    let newBorder = this.state.border

    if (this.state.border[index] === null && !this.state.winner) {

      let newPlayer = this.state.currentPlayer === this.state.player1 ? this.state.player2 : this.state.player1
      this.setState({
        border: newBorder,
        currentPlayer: newPlayer
      })
      newBorder[index] = this.state.currentPlayer
    }


    this.checkWinner();

    console.log(this.state.border)

  }




  render() {
    const Box = this.state.border.map((box, index) =>
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>)
    const winnerText = this.state.winner != null ? this.returnDiv() : null



    return (
      <div className="bg">

        <div className="App" >

          <h2>Tic Tac Toe</h2>
          <h3>{winnerText}</h3>

          <div className="border">
            {Box}
            <button className="button" onClick={() => this.resetButton()}> Reset game </button>
          </div>

        </div>
      </div>


    );
  }
}

export default App;
