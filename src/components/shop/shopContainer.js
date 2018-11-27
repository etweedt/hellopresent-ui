import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './shopContent';
import {
  getAltWishlists,
  clearAltWishlists,
  claimWishlistItem,
  unclaimWishlistItem
} from '../../actions/shoppingWishlistActions';

export class browseContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    wishlists: PropTypes.array.isRequired,
    getShoppingWishlists: PropTypes.func.isRequired,
    clearShoppingWishlists: PropTypes.func.isRequired,
    claimItem: PropTypes.func.isRequired,
    unclaimItem: PropTypes.func.isRequired
  };

  state = {
    selectedUser: ''
  };

  componentWillMount() {
    const {auth, getShoppingWishlists} = this.props;

    if (auth.email) {
      getShoppingWishlists(auth.email);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {auth, getShoppingWishlists} = this.props;

    if (auth.email !== nextProps.auth.email && nextProps.auth.email) {
      getShoppingWishlists(nextProps.auth.email);
    }

    if (this.props.wishlists.length === 0 && nextProps.wishlists.length > 0) {
      this.setState({
        selectedUser:
          nextProps.wishlists[0].firstName +
          ' ' +
          nextProps.wishlists[0].lastName
      });
    }
  }

  componentWillUnmount() {
    const {clearShoppingWishlists} = this.props;
    clearShoppingWishlists();
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
    const {wishlists, auth} = this.props;
    const {selectedUser} = this.state;

    return (
      <Content
        wishlists={wishlists}
        selected={selectedUser}
        selectedChanged={this.selectedChanged}
        userName={auth.email}
        onClaimChanged={this.onClaimChanged}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    wishlists: state.shoppingWishlists
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getShoppingWishlists: email => {
      dispatch(getAltWishlists(email));
    },
    clearShoppingWishlists: () => {
      dispatch(clearAltWishlists());
    },
    claimItem: (email, item, itemOwner) => {
      dispatch(claimWishlistItem(email, item, itemOwner));
    },
    unclaimItem: (email, item, itemOwner) => {
      dispatch(unclaimWishlistItem(email, item, itemOwner));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(browseContainer);
