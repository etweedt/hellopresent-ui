import React from 'react';
import PropTypes from 'prop-types';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const confirmRemoveGroupModal = ({isOpen, closeModal, confirmModal}) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>Remove group member</ModalHeader>
      <ModalBody>
        <p>Are you sure?</p>
      </ModalBody>
      <ModalFooter>
        <Button outline color="danger" onClick={confirmModal}>
          Delete
        </Button>
        <Button outline color="secondary" onClick={closeModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

confirmRemoveGroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  confirmModal: PropTypes.func.isRequired
};

export default confirmRemoveGroupModal;
