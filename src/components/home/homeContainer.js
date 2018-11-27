import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export class homeContainer extends React.Component {
  static propTypes = {
    // prop: PropTypes.any.isRequired
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-sm">
            <span>homeContainer</span>
          </div>
        </div>
      </section>
    );
  }
}

export const mapStateToProps = () => {
  return {};
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(homeContainer);
