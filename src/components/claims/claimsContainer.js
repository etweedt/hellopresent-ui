import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './claimsContent';
import ClaimedModal from '../modals/claimedByModal';
import * as claimActions from '../../actions/claimActions';
import * as wishlistActions from '../../actions/shoppingWishlistActions';

export class claimedContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    claims: PropTypes.array.isRequired,
    getClaims: PropTypes.func.isRequired,
    clearClaims: PropTypes.func.isRequired,
    unclaimItem: PropTypes.func.isRequired,
  };

  state = {
    showClaimedByModal: false,
    claimedBy: '',
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

    unclaimItem(auth.email, wishlist.email, item, true);
  };

  onViewClaim = claimedBy => {
    this.setState({
      showClaimedByModal: true,
      claimedBy,
    });
  };

  closeViewCLaim = () => {
    this.setState({
      showClaimedByModal: false,
      claimedBy: '',
    });
  };

  render() {
    const {auth, claims} = this.props;
    const {showClaimedByModal, claimedBy} = this.state;

    return (
      <>
        <Content
          claims={claims}
          userName={auth.email ? auth.email : ''}
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
  return {
    auth: state.auth,
    claims: state.claims,
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
    unclaimItem: (email, wishlistId, item) => {
      dispatch(
        wishlistActions.unclaimWishlistItem(email, wishlistId, item, true)
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(claimedContainer);
