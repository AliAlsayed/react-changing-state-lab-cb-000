import React from 'react';

export default class Status extends React.Component {
  render () {
    const { winner, isComplete } = this.props;
    return (
      <div>
        {isComplete ? winner ? `${winner} wins` : 'Tie' : ''}
        //{ winner ? `${winner} wins` : 'Tie'}
      </div>
    );
  }
}
