import React, { useState } from 'react';
import ModalForm from '../Modal/Modal';
import "./Button.scss";
 // Компонент Button
function Button(props) {
 
  const { backgroundColor, text, onClick } = props;
  const buttonStyle = {
    backgroundColor: backgroundColor,  
  }
   
  return (
      <button
      style={buttonStyle}
      onClick={onClick}
      className = "button"
      >{text}
      </button>
  );
}

export default Button;

