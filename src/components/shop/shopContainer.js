import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './shopContent';
import * as groupMemberActions from '../../actions/groupMemberActions';

export class browseContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    getGroupMembers: PropTypes.func.isRequired,
    clearGroupMembers: PropTypes.func.isRequired,
    // wishlists: PropTypes.array.isRequired,
    // getShoppingWishlists: PropTypes.func.isRequired,
    // clearShoppingWishlists: PropTypes.func.isRequired,
    // claimItem: PropTypes.func.isRequired,
    // unclaimItem: PropTypes.func.isRequired
  };

  state = {
    selectedUser: ''
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

    // if (this.props.wishlists.length === 0 && nextProps.wishlists.length > 0) {
    //   this.setState({
    //     selectedUser:
    //       nextProps.wishlists[0].firstName +
    //       ' ' +
    //       nextProps.wishlists[0].lastName
    //   });
    // }
  }

  componentWillUnmount() {
    const {clearGroupMembers} = this.props;
    clearGroupMembers();
  }

  selectedChanged = event => {
    this.setState({selectedUser: event.target.value});
  };

  onClaimChanged = (item, itemOwner) => {
    const {auth, unclaimItem, claimItem} = this.props;

    if (item.claimedBy === auth.email) {
      unclaimItem(auth.email, item, itemOwner);
    } else {
      claimItem(auth.email, item, itemOwner);
    }
  };

  render() {
    const {groupMembers} = this.props;
    const {selectedUser} = this.state;

    return (
      <Content
        selected={selectedUser}
        selectedChanged={this.selectedChanged}
        groupMembers={groupMembers}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    groupMembers: state.groupMembers
    // wishlists: state.shoppingWishlists
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getGroupMembers: email => {
      dispatch(groupMemberActions.getUserGroupMembers(email));
    },
    clearGroupMembers: () => {
      dispatch(groupMemberActions.clearUserGroupMembers());
    }
    // getShoppingWishlists: email => {
    //   dispatch(getAltWishlists(email));
    // },
    // clearShoppingWishlists: () => {
    //   dispatch(clearAltWishlists());
    // },
    // claimItem: (email, item, itemOwner) => {
    //   dispatch(claimWishlistItem(email, item, itemOwner));
    // },
    // unclaimItem: (email, item, itemOwner) => {
    //   dispatch(unclaimWishlistItem(email, item, itemOwner));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(browseContainer);
