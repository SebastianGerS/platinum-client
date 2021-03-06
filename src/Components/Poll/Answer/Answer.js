import React, { Component } from 'react';
import Vote from '../../../Redux/Containers/Polls/Vote';
import { Redirect } from 'react-router-dom';
/* eslint-disable react/prop-types, no-console */

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      redirectToResult: false,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.triggerRedirectToResult = this.triggerRedirectToResult.bind(this);
  }
  componentWillMount() {
    this.props.createAnswer(this.props.pollId);
  }

  nextQuestion() {
    if (this.state.currentQuestion < this.props.questionnaire.questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
    } else {
      this.triggerRedirectToResult();
    }
  }
  triggerRedirectToResult() {
    this.setState({
      redirectToResult: true,
    });
  }
  render() {
    return (
      <div>
        {this.state.redirectToResult &&
        <Redirect to={`/polls/${this.props.pollId}/result`} />
        }
        {this.props.questionnaire.id && this.props.answer.id &&
        <Vote
          question={this.props.questionnaire.questions[this.state.currentQuestion]}
          nextQuestion={this.nextQuestion}
          answer={this.props.answer}
          redirectToResult={this.triggerRedirectToResult}
        />
        }
      </div>
    );
  }
}

/* eslint-enable react/prop-types, no-console */
