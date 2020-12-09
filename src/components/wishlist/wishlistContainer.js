import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './wishlistContent';
import EditModal from '../modals/editWishlistItemModal';
import DeleteModal from '../modals/removeItemModal';
import {
  getUserWishlist,
  addItemToUserWishlist,
  deleteItemFromUserWishlist,
  updateUserWishlistItem,
  clearUserWishlist
} from '../../actions/userWishlistActions';
import clone from '../../utils/deepClone';

export class userWishlistContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    getWishlist: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    clearWishlist: PropTypes.func.isRequired,
    wishlist: PropTypes.array.isRequired
  };

  state = {
    showModal: false,
    showDeleteModal: false,
    addMode: true,
    toEdit: {
      name: '',
      description: '',
      url: '',
      notes: '',
      priceTier: 0
    },
    toDelete: {}
  };

  componentWillMount() {
    const {auth, getWishlist} = this.props;
    if (auth.email) {
      getWishlist(auth.email);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {auth, getWishlist} = this.props;

    if (auth.email !== nextProps.auth.email && nextProps.auth.email) {
      getWishlist(nextProps.auth.email);
    }
  }

  componentWillUnmount() {
    const {clearWishlist} = this.props;
    clearWishlist();
  }

  addItem = () => {
    this.setState({
      showModal: true,
      addMode: true,
      toEdit: {
        name: '',
        description: '',
        url: '',
        notes: '',
        priceTier: 0
      }
    });
  };

  editItem = item => {
    this.setState({
      showModal: true,
      addMode: false,
      toEdit: clone(item)
    });
  };

  onChanged = event => {
    const updated = clone(this.state.toEdit);
    updated[event.target.name] = event.target.value;

    this.setState({
      toEdit: updated
    });
  };

  onSave = () => {
    const {addItem, wishlist, editItem, auth} = this.props;
    const toSave = clone(this.state.toEdit);

    if (toSave.url.length > 0) {
      if (!toSave.url.startsWith('http')) {
        toSave.url = `http://${toSave.url}`;
      }
    }

    if (this.state.addMode) {
      addItem(auth.email, wishlist, toSave);
    } else {
      editItem(auth.email, wishlist, toSave);
    }

    this.setState({
      showModal: false,
      addMode: true,
      toEdit: {
        name: '',
        description: '',
        url: '',
        notes: '',
        priceTier: 0
      }
    });
  };

  cancelModal = () => {
    this.setState({
      showModal: false,
      addMode: true,
      toEdit: {
        name: '',
        description: '',
        url: '',
        notes: '',
        priceTier: 0
      }
    });
  };

  showDeleteModal = toDelete => {
    this.setState({showDeleteModal: true, toDelete});
  };

  cancelDeleteModal = () => {
    this.setState({
      showDeleteModal: false,
      toDelete: {}
    });
  };

  onDelete = () => {
    const {auth, wishlist, removeItem} = this.props;
    const {toDelete} = this.state;

    removeItem(auth.email, wishlist, toDelete);

    this.setState({
      showDeleteModal: false,
      toDelete: {}
    });
  };

  render() {
    const {wishlist} = this.props;
    const {showModal, addMode, toEdit, showDeleteModal, toDelete} = this.state;

    return (
      <Fragment>
        <Content
          wishlist={wishlist}
          onAdd={this.addItem}
          onEdit={this.editItem}
          onDelete={this.showDeleteModal}
        />
        <EditModal
          show={showModal}
          addMode={addMode}
          wishlistItem={toEdit}
          onChange={this.onChanged}
          onSave={this.onSave}
          onCancel={this.cancelModal}
        />
        <DeleteModal
          show={showDeleteModal}
          toRemove={toDelete}
          onConfirm={this.onDelete}
          onCancel={this.cancelDeleteModal}
        />
      </Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    wishlist: state.userWishlist
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getWishlist: email => {
      dispatch(getUserWishlist(email));
    },
    addItem: (email, wishlist, item) => {
      dispatch(addItemToUserWishlist(email, wishlist, item));
    },
    removeItem: (email, wishlist, item) => {
      dispatch(deleteItemFromUserWishlist(email, wishlist, item));
    },
    editItem: (email, wishlist, item) => {
      dispatch(updateUserWishlistItem(email, wishlist, item));
    },
    clearWishlist: () => {
      dispatch(clearUserWishlist());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(userWishlistContainer);
