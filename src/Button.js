import React, { useState } from 'react';
import ModalForm from './Modal'
 // Компонент Button
function Button(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { backgroundColor, text, onClick } = props;
  const buttonStyle = {
    backgroundColor: backgroundColor,  
  }
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <div className='button_container'>
      <button
      style={buttonStyle}
      onClick={onClick}
      className = "button"
      >{text}
      </button>
    </div>
  );
}

export default Button;

