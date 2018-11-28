import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './homeContent';
import * as userInfoActions from '../../actions/userInfoActions';

export class homeContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getUserInfo: PropTypes.func.isRequired,
    clearUserInfo: PropTypes.func.isRequired
  };

  componentWillMount() {
    const {auth, getUserInfo} = this.props;

    if (auth.email) {
      getUserInfo(auth.email);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {auth, getUserInfo} = this.props;

    if (auth.email !== nextProps.auth.email && nextProps.auth.email) {
      getUserInfo(nextProps.auth.email);
    }
  }

  componentWillunmount() {
    const {clearUserInfo} = this.props;
    clearUserInfo();
  }

  render() {
    const {auth, profile} = this.props;

    return <Content auth={auth} profile={profile} />;
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    profile: state.userInfo
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: email => {
      dispatch(userInfoActions.getUserInfo(email));
    },
    clearUserInfo: () => {
      dispatch(userInfoActions.clearUserInfo());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(homeContainer);
