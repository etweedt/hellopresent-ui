import React from 'react';
import PropTypes from 'prop-types';

const priceBadge = ({name, value, selected, onChange}) => {
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
        return selected ? 'btn-primary' : 'btn-outline-primary';
      case 3:
      case 4:
        return selected ? 'btn-info' : 'btn-outline-info';
      case 5:
        return selected ? 'btn-success' : 'btn-outline-success';
      case 6:
        return selected ? 'btn-warning' : 'btn-outline-warning';
      case 7:
      default:
        return selected ? 'btn-danger' : 'btn-outline-danger';
    }
  };

  const prices = getPrices();

  return (
    <div className="price-badge">
      <button
        className={'btn btn-sm ' + getColor()}
        onClick={onChange.bind(this, {target: {name, value}})}>
        {prices.high
          ? '$' +
            prices.low.toLocaleString() +
            '-' +
            '$' +
            prices.high.toLocaleString()
          : '$' + prices.low.toLocaleString() + '+'}
      </button>
    </div>
  );
};

priceBadge.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default priceBadge;
