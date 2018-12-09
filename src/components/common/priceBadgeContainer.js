import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Badge from './priceBadgeSelector';

const priceBadgeContainer = ({name, value, onChange}) => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Fragment>
      <div>
        {arr.map(i => {
          return (
            <Badge
              key={i}
              name={name}
              value={i}
              selected={i === value}
              onChange={onChange}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

priceBadgeContainer.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default priceBadgeContainer;
