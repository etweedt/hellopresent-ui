import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './groupContent';
import * as groupActions from '../../actions/groupActions';

export class groupContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    groupMembers: PropTypes.array.isRequired,
    getGroupMembers: PropTypes.func.isRequired,
    clearGroupMembers: PropTypes.func.isRequired,
    addGroupMember: PropTypes.func.isRequired,
    removeGroupMember: PropTypes.func.isRequired
  };

  componentWillMount() {
    const {auth, getGroupMembers} = this.props;

    if (auth.email) {
      getGroupMembers(auth.email);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {auth, getGroupMembers} = this.props;

    if (auth.email !== nextProps.auth.email && nextProps.auth.email) {
      getGroupMembers(nextProps.auth.email);
    }
  }

  componentWillUnmount() {
    const {clearGroupMembers} = this.props;
    clearGroupMembers();
  }

  render() {
    const {groupMembers} = this.props;

    return <Content groupMembers={groupMembers} />;
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    groupMembers: state.groupMembers
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getGroupMembers: email => {
      dispatch(groupActions.getUserGroupMembers(email));
    },
    clearGroupMembers: () => {
      dispatch(groupActions.clearUserGroupMembers());
    },
    addGroupMember: (userEmail, memberEmail) => {
      dispatch(groupActions.addGroupMember(userEmail, memberEmail));
    },
    removeGroupMember: (userEmail, memberEmail) => {
      dispatch(groupActions.removeGroupMember(userEmail, memberEmail));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(groupContainer);
