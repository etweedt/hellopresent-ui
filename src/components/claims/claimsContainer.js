import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './claimsContent';
import * as claimActions from '../../actions/claimActions';
import * as wishlistActions from '../../actions/shoppingWishlistActions';

export class claimedContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    claims: PropTypes.array.isRequired,
    getClaims: PropTypes.func.isRequired,
    clearClaims: PropTypes.func.isRequired,
    unclaimItem: PropTypes.func.isRequired
  };

  componentWillMount() {
    const {auth, getClaims} = this.props;
    if (auth.email) {
      getClaims(auth.email);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {auth, getClaims} = this.props;

    if (auth.email !== nextProps.auth.email && nextProps.auth.email) {
      getClaims(nextProps.auth.email);
    }
  }

  componentWillUnmount() {
    const {clearClaims} = this.props;
    clearClaims();
  }

  onClaimChanged = (item, wishlist) => {
    const {auth, unclaimItem} = this.props;

    unclaimItem(auth.email, wishlist.id, item.id, true);
  };

  render() {
    const {auth, claims} = this.props;

    return (
      <Content
        claims={claims}
        userName={auth.email ? auth.email : ''}
        onClaimChanged={this.onClaimChanged}
      />
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    claims: state.claims
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getClaims: email => {
      dispatch(claimActions.getClaims(email));
    },
    clearClaims: () => {
      dispatch(claimActions.clearClaims());
    },
    unclaimItem: (email, wishlistId, itemId) => {
      dispatch(
        wishlistActions.unclaimWishlistItem(email, wishlistId, itemId, true)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(claimedContainer);
