import React from 'react';
export default function ModalWindow({ children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
}
