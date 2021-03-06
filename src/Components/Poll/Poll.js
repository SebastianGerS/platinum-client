import React, { Component } from 'react';
import Answer from '../../Redux/Containers/Polls/Answer';

/* eslint-disable react/prop-types */

export default class Poll extends Component {
  componentWillMount() {
    this.props.fetchPoll(window.location.pathname);
  }

  render() {
    return (
      <div className="">

        {
          this.props.poll.status === 'active' &&
            <Answer questionnaire={this.props.poll.questionnaire} pollId={this.props.poll.id} />
        }
        {
          this.props.poll.status === 'closed' &&
            <h2>This Poll has been closed</h2>
        }
        {
          !this.props.poll.status && !this.props.isFetching &&
          <h2>Not found</h2>
        }
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
