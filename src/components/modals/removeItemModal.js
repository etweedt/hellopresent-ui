import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const removeItemModal = ({show, toRemove, onConfirm, onCancel}) => {
  return (
    <section>
      <Modal isOpen={show}>
        <ModalHeader>Confirm Remove</ModalHeader>
        <ModalBody>
          <p>
            Are you sure you want to delete <em>{toRemove.name}</em> from your
            list?
          </p>
          <p>
            Remember, there is no guarantee that it has not already been claimed
            and bought by someone else.
          </p>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" type="button" onClick={onConfirm}>
            Remove
          </button>
          <button className="btn btn-light" type="button" onClick={onCancel}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </section>
  );
};

removeItemModal.propTypes = {
  show: PropTypes.bool.isRequired,
  toRemove: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default removeItemModal;
