import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './homeContent';

export class homeContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const {auth} = this.props;

    return <Content auth={auth} />;
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(homeContainer);
