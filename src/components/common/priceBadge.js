import React from 'react';
import PropTypes from 'prop-types';

const priceBadge = ({value}) => {
  const getPrices = () => {
    switch (value) {
      case 1:
        return {
          high: 10,
          low: 0
        };
      case 2:
        return {
          high: 25,
          low: 11
        };
      case 3:
        return {
          high: 50,
          low: 26
        };
      case 4:
        return {
          high: 100,
          low: 51
        };
      case 5:
        return {
          high: 500,
          low: 101
        };
      case 6:
        return {
          high: 1000,
          low: 501
        };
      case 7:
      default:
        return {
          high: null,
          low: 1001
        };
    }
  };

  const getColor = () => {
    switch (value) {
      case 1:
      case 2:
        return 'badge-primary';
      case 3:
      case 4:
        return 'badge-info';
      case 5:
        return 'badge-success';
      case 6:
        return 'badge-warning';
      case 7:
      default:
        return 'badge-danger';
    }
  };

  const prices = getPrices();

  return (
    <h5>
      <span className={'badge ' + getColor()}>
        {prices.high
          ? '$' +
            prices.low.toLocaleString() +
            '-' +
            '$' +
            prices.high.toLocaleString()
          : '$' + prices.low.toLocaleString() + '+'}
      </span>
    </h5>
  );
};

priceBadge.propTypes = {
  value: PropTypes.number.isRequired
};

export default priceBadge;
