import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      turn: 'X',
      board: [null, null, null, null, null, null, null, null, null]
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board: [null, null, null, null, null, null, null, null, null]
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
  }

  getWinner () {
    const turn = this.state.turn
    for(var i = 0; i < solutions.length; i++){
      const comb = [this.state.board[solutions[i][0]], this.state.board[solutions[i][1]], this.state.board[solutions[i][2]]]
      if (comb === [turn, turn, turn]){
        return `${turn}`
      }
    }
  }

  isComplete () {
    const notNull = (element) => element !== null
    return getWinner() || this.state.board.every(notNull)
  }

  render () {
    return (
      <div>
        <Board turn={this.state.turn} board={this.state.board} onClick={this.handleClick}/>
        { this.isComplete() ? <Status winner={this.getWinner} /> : null}
        <button className="game__reset" onClick={this.handleReset}></button>
      </div>
    );
  }
}
