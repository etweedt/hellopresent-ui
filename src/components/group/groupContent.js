import React from 'react';
import PropTypes from 'prop-types';

const groupContent = ({groupMembers}) => {
  return (
    <section>
      <div className="row">
        <div className="col-sm">
          <h1>
            <i className="fa fa-group" /> Your gifting circle
          </h1>
        </div>
      </div>
    </section>
  );
};

groupContent.propTypes = {
  groupMembers: PropTypes.array.isRequired
};

export default groupContent;
