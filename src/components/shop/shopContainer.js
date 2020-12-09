import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './shopContent';
import * as groupActions from '../../actions/groupActions';
import * as shoppingWishlistActions from '../../actions/shoppingWishlistActions';
import ClaimedModal from '../modals/claimedByModal';

export class browseContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    groupMembers: PropTypes.array.isRequired,
    getGroupMembers: PropTypes.func.isRequired,
    clearGroupMembers: PropTypes.func.isRequired,
    wishlist: PropTypes.object.isRequired,
    getShoppingWishlist: PropTypes.func.isRequired,
    clearShoppingWishlist: PropTypes.func.isRequired,
    claimItem: PropTypes.func.isRequired,
    unclaimItem: PropTypes.func.isRequired
  };

  state = {
    selectedUser: '',
    showClaimedByModal: false,
    claimedBy: ''
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
    const {clearGroupMembers, clearShoppingWishlist} = this.props;
    clearGroupMembers();
    clearShoppingWishlist();
  }

  selectedChanged = event => {
    const {getShoppingWishlist} = this.props;
    const selected = event.target.value;

    getShoppingWishlist(selected);
    this.setState({selectedUser: selected});
  };

  onClaimChanged = item => {
    const {auth, wishlist, claimItem, unclaimItem} = this.props;

    if (item.claimedBy === auth.email) {
      unclaimItem(auth.email, wishlist.email, item);
    } else {
      claimItem(auth.email, wishlist.email, item);
    }
  };

  onViewClaim = claimedBy => {
    this.setState({
      showClaimedByModal: true,
      claimedBy
    });
  };

  closeViewCLaim = () => {
    this.setState({
      showClaimedByModal: false,
      claimedBy: ''
    });
  };

  render() {
    const {auth, groupMembers, wishlist} = this.props;
    const {selectedUser, showClaimedByModal, claimedBy} = this.state;

    return (
      <>
        <Content
          auth={auth}
          selected={selectedUser}
          selectedChanged={this.selectedChanged}
          groupMembers={groupMembers}
          wishlist={wishlist}
          onClaimChanged={this.onClaimChanged}
          onViewClaim={this.onViewClaim}
        />
        <ClaimedModal
          isOpen={showClaimedByModal}
          closeModal={this.closeViewCLaim}
          claimedBy={claimedBy}
        />
      </>
    );
  }
}

export const mapStateToProps = state => {
  const otherUsers = state.allUsers;
  const found = otherUsers.find(user => {
    return user.id === state.auth.email;
  });

  if (found) {
    otherUsers.splice(otherUsers.indexOf(found), 1);
  }

  return {
    auth: state.auth,
    groupMembers: state.groupMembers,
    wishlist: state.shoppingWishlist
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
    getShoppingWishlist: email => {
      dispatch(shoppingWishlistActions.getShoppingWishlist(email));
    },
    clearShoppingWishlist: () => {
      dispatch(shoppingWishlistActions.clearShoppingWishlist());
    },
    claimItem: (email, wishlistId, item) => {
      dispatch(
        shoppingWishlistActions.claimWishlistItem(email, wishlistId, item)
      );
    },
    unclaimItem: (email, wishlistId, item) => {
      dispatch(
        shoppingWishlistActions.unclaimWishlistItem(email, wishlistId, item)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(browseContainer);
