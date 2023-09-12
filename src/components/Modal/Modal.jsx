// import React from 'react';
import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "./Modal.scss";
import Button from '../Button/Button';
 

Modal.setAppElement('#root');

const ModalForm = ({ header, closeButton, text , isOpen, article }) => {
  
  if (!isOpen) return null;

  function setArticleToLocalStorage() {
     localStorage.setItem('cart', JSON.stringify(article))
     window.location.reload()
  }
  
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
        <div className='modal__buttonOk'>
          <Button backgroundColor="pink" text="Ok" onClick={()=>{
            setArticleToLocalStorage()
            closeButton()
          }}/>
        </div>
        <div className='modal__buttonClose'>
          <Button backgroundColor="black" text="Cancel" onClick={closeButton} />
        </div>
      </div>
    </div>
  );
};

export default ModalForm;