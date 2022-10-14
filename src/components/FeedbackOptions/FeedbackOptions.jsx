import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        {this.props.options.map(button => (
          <button
            key={button}
            value={button}
            type="button"
            onClick={event => this.props.onLeaveFeedback(event)}
          >
            {button}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
