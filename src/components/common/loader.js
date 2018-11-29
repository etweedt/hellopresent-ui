import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

export class loader extends React.Component {
  static propTypes = {
    loading: PropTypes.number.isRequired,
    forceVisible: PropTypes.bool
  };

  render() {
    const {loading, forceVisible} = this.props;

    if (loading > 0 || forceVisible) {
      return (
        <section>
          <div className="loader-page" />
          <div className="loader">
            <Loader type="Oval" color="#5bc0de" height={80} width={80} />
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

export default connect(
  mapStateToProps,
  () => {
    return {};
  }
)(loader);
