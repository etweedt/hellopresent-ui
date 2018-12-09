import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import PriceBadges from '../common/priceBadgeContainer';

const editWishlistItemModal = ({
  show,
  wishlistItem,
  addMode,
  onChange,
  onSave,
  onCancel
}) => {
  return (
    <Modal isOpen={show}>
      <ModalHeader>{addMode ? 'Add Item' : 'Edit Item'}</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              valid={wishlistItem.name.length >= 2}
              placeholder="Item name"
              value={wishlistItem.name}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="url">URL</Label>
            <Input
              type="text"
              name="url"
              placeholder="URL to product"
              value={wishlistItem.url}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              maxLength="128"
              placeholder="Short description"
              value={wishlistItem.description}
              onChange={onChange}
            />
            <FormText>{wishlistItem.description.length} of 128</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="notes">Notes</Label>
            <Input
              type="textarea"
              name="notes"
              maxLength="256"
              placeholder="Item size, type, or other special considerations"
              value={wishlistItem.notes}
              onChange={onChange}
            />
            <FormText>{wishlistItem.notes.length} of 256</FormText>
          </FormGroup>
        </Form>
        <PriceBadges
          name="priceTier"
          value={wishlistItem.priceTier}
          onChange={onChange}
        />
      </ModalBody>
      <ModalFooter>
        <button
          className="btn btn-success"
          type="button"
          onClick={onSave}
          disabled={wishlistItem.name.length < 2 || wishlistItem.priceTier < 1}>
          Save
        </button>
        <button className="btn btn-light" type="button" onClick={onCancel}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};

editWishlistItemModal.propTypes = {
  show: PropTypes.bool.isRequired,
  wishlistItem: PropTypes.object.isRequired,
  addMode: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default editWishlistItemModal;
