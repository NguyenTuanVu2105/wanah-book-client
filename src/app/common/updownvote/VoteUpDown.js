import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VoteUpDown.css';

export class VoteUpDown extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className="up-down">        
        <FontAwesomeIcon className="count countUp" onClick={this.increment} icon="sort-up"></FontAwesomeIcon>
        <div>{this.state.score}</div>
        <FontAwesomeIcon className="count countDown" onClick={this.decrement} icon="sort-down"></FontAwesomeIcon>
      </div>
    );
  }

  increment() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  decrement() {
    this.setState({
      score: this.state.score - 1,
    });
  }
}