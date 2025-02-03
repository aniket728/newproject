import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Mask */}
      <div className="modal-mask" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="modal-container">
        <div className="modal-content">
          {children}
          <button className="modal-close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;