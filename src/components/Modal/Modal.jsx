// import React from 'react';
import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "./Modal.scss";
 

Modal.setAppElement('#root');

const ModalForm = ({ header, closeButton, text, action, actionOk, isOpen }) => {
  
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <h1 className='modal__header'>
      <h2 className='modal__headerText'>{header}</h2>
      {closeButton && (
        <button className='modal__CloseButton'
        onClick={closeButton}
        >
        </button>
      )}
      </h1>
      <p className='modal__text'>{text}</p>
      <div className='modal__buttons'>
        <div className='modal__buttonOk'>{actionOk}</div>
        <div className='modal__buttonClose'>{action}</div>
      </div>
    </div>
  );
};

export default ModalForm;