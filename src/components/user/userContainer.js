import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './userContent';
import * as userInfoActions from '../../actions/userInfoActions';
import clone from '../../utils/deepClone';

export class userContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    userInfo: PropTypes.object.isRequired,
    getUserInfo: PropTypes.func.isRequired,
    updateUserInfo: PropTypes.func.isRequired,
    clearUserInfo: PropTypes.func.isRequired
  };

  state = {
    toEdit: {
      firstName: '',
      lastName: '',
      address: ''
    }
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

    this.setState({
      toEdit: {
        firstName: nextProps.userInfo.firstName
          ? nextProps.userInfo.firstName
          : '',
        lastName: nextProps.userInfo.lastName
          ? nextProps.userInfo.lastName
          : '',
        address: nextProps.userInfo.address ? nextProps.userInfo.address : ''
      }
    });
  }

  componentWillUnmount() {
    const {clearUserInfo} = this.props;
    clearUserInfo();
  }

  userInfoChanged = event => {
    const updated = clone(this.state.toEdit);
    updated[event.target.name] = event.target.value;

    this.setState({
      toEdit: updated
    });
  };

  saveUserInfo = () => {
    const {auth, updateUserInfo} = this.props;
    const {toEdit} = this.state;

    updateUserInfo(auth.email, toEdit);
  };

  render() {
    const {toEdit} = this.state;

    return (
      <Content
        userInfo={toEdit}
        userInfoChanged={this.userInfoChanged}
        saveUserInfo={this.saveUserInfo}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    userInfo: state.userInfo
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: email => {
      dispatch(userInfoActions.getUserInfo(email));
    },
    updateUserInfo: (email, userInfo) => {
      dispatch(userInfoActions.updateUserInfo(email, userInfo));
    },
    clearUserInfo: () => {
      dispatch(userInfoActions.clearUserInfo());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(userContainer);
