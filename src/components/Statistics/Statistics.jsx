import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Value, Name } from './Statistics.styled';

class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
  };
  render() {
    return (
      <div>
        <Container>
          <Item>
            <Name>Good</Name>
            <Value>{this.props.good}</Value>
          </Item>
          <Item>
            <Name>Neutral</Name>
            <Value>{this.props.neutral}</Value>
          </Item>
          <Item>
            <Name></Name>
            Bad <Value>{this.props.bad}</Value>
          </Item>
          <Item>
            <Name>Total</Name>
            <Value>{this.props.total}</Value>
          </Item>
          <Item>
            <Name>Positive feedback </Name>
            <Value>{this.props.positiveFeedback}%</Value>
          </Item>
        </Container>
      </div>
    );
  }
}
export default Statistics;
