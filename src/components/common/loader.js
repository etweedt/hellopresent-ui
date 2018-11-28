import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

export class loader extends React.Component {
  static propTypes = {
    loading: PropTypes.number.isRequired
  };

  render() {
    const {loading} = this.props;

    if (loading > 0) {
      return (
        <section>
          <div className="loader-page" />
          <div className="loader">
            <Loader type="Triangle" color="#5bc0de" height={120} width={120} />
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
