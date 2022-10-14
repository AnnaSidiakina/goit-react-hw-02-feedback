import React from 'react';

const Statistics = ({ good, neutral, bad }) => (
  <div>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
  </div>
);
export default Statistics;
