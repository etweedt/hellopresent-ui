import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './claimsContent';
import {getUserClaims, clearUserClaims} from '../../actions/claimActions';
import {unclaimWishlistItem} from '../../actions/shoppingWishlistActions';
import clone from '../../utils/deepClone';

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

  onClaimChanged = (item, itemOwner) => {
    const {auth} = this.props;

    if (item.claimedBy === auth.email) {
      this.props.unclaimItem(auth.email, item, itemOwner);
    }
  };

  render() {
    const {auth, claims} = this.props;

    return (
      <Content
        claims={claims}
        userName={auth.email}
        onClaimChanged={this.onClaimChanged}
      />
    );
  }
}

export const mapStateToProps = state => {
  const alteredClaims = clone(state.claims);
  const toRemove = [];
  alteredClaims.forEach(c => {
    if (c.items.length === 0) {
      toRemove.push(c);
    }
  });
  toRemove.forEach(r => {
    alteredClaims.splice(alteredClaims.indexOf(r), 1);
  });

  return {
    auth: state.auth,
    claims: alteredClaims
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getClaims: email => {
      dispatch(getUserClaims(email));
    },
    clearClaims: () => {
      dispatch(clearUserClaims());
    },
    unclaimItem: (email, item, itemOwner) => {
      dispatch(unclaimWishlistItem(email, item, itemOwner));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(claimedContainer);
