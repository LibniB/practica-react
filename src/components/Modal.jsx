import React from 'react';
import Modal from 'Modal';

const Modal = ({ isOpen, handleClose, title, content }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose}>
      <h2>{title}</h2>
      <div>{content}</div>
      <button onClick={handleClose}>Cerrar</button>
    </Modal>
  );
};

export default Modal;