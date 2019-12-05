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
    // this.setState({
    //   items: update(this.state.board, {i:{$set: 'updated field name'}})
    // })
  }

  getWinner () {
    const results = solutions.map(
      (solution) => solution.map((i) => this.state.board[i]).join('')
    );
    const row = results.find(
      (result) => result === 'XXX' || result === 'OOO'
    );
    return row && row[0];
  }

  isComplete () {
    return this.state.board.every((field) => field);
  }


  render () {
    return (
      <div>
        <Board turn={this.state.turn} board={this.state.board} onClick={this.handleClick}/>
        { this.isComplete() ? <Status winner={this.getWinner()} /> : null}
        <button className="game__reset" onClick={this.handleReset}></button>
      </div>
    );
  }
}
