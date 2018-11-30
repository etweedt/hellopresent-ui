import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './homeContent';
import * as userInfoActions from '../../actions/userInfoActions';
import * as wishlistActions from '../../actions/userWishlistActions';
import * as groupActions from '../../actions/groupActions';
import * as claimActions from '../../actions/claimActions';

export class homeContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getUserInfo: PropTypes.func.isRequired,
    clearUserInfo: PropTypes.func.isRequired,
    groupMembers: PropTypes.array.isRequired,
    getGroupMembers: PropTypes.func.isRequired,
    clearGroupMembers: PropTypes.func.isRequired,
    wishlist: PropTypes.array.isRequired,
    getWishlist: PropTypes.func.isRequired,
    clearWishlist: PropTypes.func.isRequired,
    claims: PropTypes.array.isRequired,
    getClaims: PropTypes.func.isRequired,
    clearClaims: PropTypes.func.isRequired
  };

  componentWillMount() {
    const {
      auth,
      getUserInfo,
      getGroupMembers,
      getWishlist,
      getClaims
    } = this.props;

    if (auth.email) {
      getUserInfo(auth.email);
      getWishlist(auth.email);
      getGroupMembers(auth.email);
      getClaims(auth.email);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      auth,
      getUserInfo,
      getGroupMembers,
      getWishlist,
      getClaims
    } = this.props;

    if (auth.email !== nextProps.auth.email && nextProps.auth.email) {
      getUserInfo(nextProps.auth.email);
      getWishlist(nextProps.auth.email);
      getGroupMembers(nextProps.auth.email);
      getClaims(nextProps.auth.email);
    }
  }

  componentWillunmount() {
    const {
      clearUserInfo,
      clearGroupMembers,
      clearWishlist,
      clearClaims
    } = this.props;
    clearUserInfo();
    clearWishlist();
    clearGroupMembers();
    clearClaims();
  }

  render() {
    const {auth, profile, groupMembers, wishlist, claims} = this.props;

    return (
      <Content
        auth={auth}
        profile={profile}
        groupMembers={groupMembers}
        wishlist={wishlist}
        claims={claims}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    profile: state.userInfo,
    wishlist: state.userWishlist,
    groupMembers: state.groupMembers,
    claims: state.claims
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: email => {
      dispatch(userInfoActions.getUserInfo(email));
    },
    clearUserInfo: () => {
      dispatch(userInfoActions.clearUserInfo());
    },
    getGroupMembers: email => {
      dispatch(groupActions.getUserGroupMembers(email));
    },
    clearGroupMembers: () => {
      dispatch(groupActions.clearUserGroupMembers());
    },
    getWishlist: email => {
      dispatch(wishlistActions.getUserWishlist(email));
    },
    clearWishlist: () => {
      dispatch(wishlistActions.clearUserWishlist());
    },
    getClaims: email => {
      dispatch(claimActions.getClaims(email));
    },
    clearClaims: () => {
      dispatch(claimActions.clearClaims());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(homeContainer);
