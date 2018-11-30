import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './groupContent';
import Confirm from '../modals/confirmRemoveGroupModal';
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

  state = {
    activeTab: 'members',
    showConfirmModal: false
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

  switchTab = tab => {
    this.setState({
      activeTab: tab
    });
  };

  onAddMember = member => {
    const {auth, addGroupMember} = this.props;
    addGroupMember(auth.email, member.email);
  };

  onRemoveMember = member => {
    this.setState({
      toRemove: member,
      showConfirmModal: true
    });
  };

  onConfirmRemoveMember = () => {
    const {auth, removeGroupMember} = this.props;
    const {toRemove} = this.state;

    removeGroupMember(auth.email, toRemove.email);
    this.onCancelRemove();
  };

  onCancelRemove = () => {
    this.setState({
      toRemove: {},
      showConfirmModal: false
    });
  };

  render() {
    const {groupMembers} = this.props;
    const {activeTab, showConfirmModal} = this.state;

    return (
      <section>
        <Content
          groupMembers={groupMembers}
          activeTab={activeTab}
          onSwitchTab={this.switchTab}
          onAddMember={this.onAddMember}
          onRemoveMember={this.onRemoveMember}
        />
        <Confirm
          isOpen={showConfirmModal}
          closeModal={this.onCancelRemove}
          confirmModal={this.onConfirmRemoveMember}
        />
      </section>
    );
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
