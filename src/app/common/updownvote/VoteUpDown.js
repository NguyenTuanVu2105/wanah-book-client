import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VoteUpDown.css';

export class VoteUpDown extends React.Component {
  constructor() {
    super();

    this.state = {
      currentScore: 0,
      score: 0
    };
  }

  render() {
    return (
      <div className="up-down">        
        <FontAwesomeIcon className="count countUp" onClick={this.onChangeScore("up")} icon="sort-up"></FontAwesomeIcon>
        <div>{this.state.currentScore}</div>
        <FontAwesomeIcon className="count countDown" onClick={this.onChangeScore("down")} icon="sort-down"></FontAwesomeIcon>
      </div>
    );
  }

  onChangeScore = (event) => () => {
    if (event === "up" && (this.state.currentScore === this.state.score || this.state.currentScore < this.state.score)) {
      this.setState({
        currentScore: this.state.currentScore + 1
      })
    }
    if (event === "down" && (this.state.currentScore === this.state.score || this.state.currentScore > this.state.score)) {
      this.setState({
        currentScore: this.state.currentScore - 1
      })
    }
  }
}