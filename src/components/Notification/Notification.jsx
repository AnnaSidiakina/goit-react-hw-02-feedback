import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

class Notification extends Component {
  static defaultProps = {
    message: ' ',
  };
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
  render() {
    return <Title>{this.props.message}</Title>;
  }
}
export default Notification;
