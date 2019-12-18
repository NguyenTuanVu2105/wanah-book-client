import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VoteUpDown.css';
import { addVote } from '../../../api/base/review';

export class VoteUpDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: props.currentScore,
      score: props.currentScore,
      voted: props.voted
    };
  }

  styleUp = {
    color: '#3e64ff'
  }

  styleDown = {
    color: '#ff0000'
  }
  render() {
    return (
      <div className="up-down">        
        <FontAwesomeIcon className="count countUp" style={this.state.voted === 1 ? this.styleUp : null} onClick={this.onChangeScore("up")} icon="sort-up"></FontAwesomeIcon>
        <div>{this.state.currentScore}</div>
        <FontAwesomeIcon className="count countDown" style={this.state.voted === 0 ? this.styleDown : null} onClick={this.onChangeScore("down")} icon="sort-down"></FontAwesomeIcon>
      </div>
    );
  }

  onChangeScore = (event) => () => {
    if (event === "up") {
      if (this.state.voted === 0){
        this.setState({
          currentScore: this.state.currentScore + 2,
          voted: 1
        })
        addVote(this.props.id, true)
      } else {
        if (this.state.voted === null) {
          this.setState({
            currentScore: this.state.currentScore + 1,
            voted: 1
          })
          addVote(this.props.id, true)
        }
      }
    }
    if (event === "down") {
      if (this.state.voted === 1){
        this.setState({
          currentScore: this.state.currentScore - 2,
          voted: 0
        })
        addVote(this.props.id, false)
      } else {
        if (this.state.voted === null) {
          this.setState({
            currentScore: this.state.currentScore - 1,
            voted: 0
          })
          addVote(this.props.id, false)
        }
      }
    }
  }
}