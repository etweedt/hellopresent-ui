import React from 'react';
import PropTypes from 'prop-types';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const claimedByModal = ({isOpen, closeModal, claimedBy}) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>Item is claimed!</ModalHeader>
      <ModalBody>
        <p>Claimed by {claimedBy}</p>
      </ModalBody>
      <ModalFooter>
        <Button outline color="primary" onClick={closeModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

claimedByModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  claimedBy: PropTypes.string.isRequired
};

export default claimedByModal;
