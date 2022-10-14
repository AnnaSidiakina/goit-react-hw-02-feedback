import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const currentButton = event.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentButton]: prevState[currentButton] + 1,
    }));
  };
  render() {
    const buttonNames = Object.keys(this.state);
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonNames}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </Section>
    );
  }
}
export default App;
