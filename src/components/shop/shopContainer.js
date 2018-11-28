import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './shopContent';
import * as groupMemberActions from '../../actions/groupMemberActions';
import * as shoppingWishlistActions from '../../actions/shoppingWishlistActions';

export class browseContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    getGroupMembers: PropTypes.func.isRequired,
    clearGroupMembers: PropTypes.func.isRequired,
    wishlist: PropTypes.object.isRequired,
    getShoppingWishlist: PropTypes.func.isRequired,
    clearShoppingWishlist: PropTypes.func.isRequired
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
  }

  componentWillUnmount() {
    const {clearGroupMembers} = this.props;
    clearGroupMembers();
  }

  selectedChanged = event => {
    const {getShoppingWishlist} = this.props;
    const selected = event.target.value;

    getShoppingWishlist(selected);
    this.setState({selectedUser: selected});
  };

  onClaimChanged = (item, itemOwner) => {
    // const {auth, unclaimItem, claimItem} = this.props;
    // if (item.claimedBy === auth.email) {
    //   unclaimItem(auth.email, item, itemOwner);
    // } else {
    //   claimItem(auth.email, item, itemOwner);
    // }
  };

  render() {
    const {auth, groupMembers, wishlist} = this.props;
    const {selectedUser} = this.state;

    return (
      <Content
        auth={auth}
        selected={selectedUser}
        selectedChanged={this.selectedChanged}
        groupMembers={groupMembers}
        wishlist={wishlist}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    groupMembers: state.groupMembers,
    wishlist: state.shoppingWishlist
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getGroupMembers: email => {
      dispatch(groupMemberActions.getUserGroupMembers(email));
    },
    clearGroupMembers: () => {
      dispatch(groupMemberActions.clearUserGroupMembers());
    },
    getShoppingWishlist: email => {
      dispatch(shoppingWishlistActions.getShoppingWishlist(email));
    },
    clearShoppingWishlist: () => {
      dispatch(shoppingWishlistActions.clearShoppingWishlist());
    }
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
