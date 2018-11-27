import React from 'react';
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
    const {addItem, editItem, auth} = this.props;

    let url = this.state.toEdit.url;
    if (!url.startsWith('http')) {
      url = 'http://' + url;
    }
    const toSave = clone(this.state.toEdit);
    toSave.url = url;

    if (this.state.addMode) {
      addItem(auth.email, toSave);
    } else {
      editItem(auth.email, toSave);
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
  }

  onDelete = () => {
    const {auth, removeItem} = this.props;
    const {toDelete} = this.state;

    removeItem(auth.email, toDelete.name);

    this.setState({
      showDeleteModal: false,
      toDelete: {}
    });
  };

  render() {
    const {wishlist} = this.props;
    const {showModal, addMode, toEdit, showDeleteModal, toDelete} = this.state;

    return (
      <section>
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
      </section>
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
    addItem: (email, item) => {
      dispatch(addItemToUserWishlist(email, item));
    },
    removeItem: (email, itemName) => {
      dispatch(deleteItemFromUserWishlist(email, itemName));
    },
    editItem: (email, item) => {
      dispatch(updateUserWishlistItem(email, item));
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