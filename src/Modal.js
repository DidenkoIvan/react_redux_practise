// import React from 'react';
import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
 

Modal.setAppElement('#root');

const ModalForm = ({ header, closeButton, text, actions, onClose, actionsOk }) => {
  
  return (
    <div className='modal_container'>
      <h1 className='modal_header'>
      <h2>{header}</h2>
      {closeButton && (
        <button className='modalButton'
        onClick={onClose}
        >
        </button>
      )}
      </h1>
      <p>{text}</p>
      <div className='buttons'>
        <div className='button_close'>{actions}</div>
        <div className='button_ok'>{actionsOk}</div>
      </div>
    </div>
  );
};

export default ModalForm;