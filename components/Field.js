import React from 'react';

export default class Field extends React.Component {
  render () {
    const { player, onClick, index } = this.props;
    return (
      <button onClick={onClick} disabled={!!player}>
        {player}
      </button>
    );
  }
}
