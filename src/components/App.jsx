import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

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
  onTotalCount = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => {
      return acc + value;
    });
  };
  onPositiveFeedback = () => {
    const positive = this.state.good;
    return Math.round((positive * 100) / this.onTotalCount());
  };
  onShow = () => {
    if (
      this.state.good === 0 &&
      this.state.neutral === 0 &&
      this.state.bad === 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    const buttonNames = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.onShow() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.onTotalCount()}
              positiveFeedback={this.onPositiveFeedback()}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
