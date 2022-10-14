import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

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
      <Container>
        {this.props.options.map(button => (
          <Button
            key={button}
            value={button}
            type="button"
            onClick={event => this.props.onLeaveFeedback(event)}
          >
            {button}
          </Button>
        ))}
      </Container>
    );
  }
}

export default FeedbackOptions;
