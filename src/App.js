import React, { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import ProductCards from './components/ProductCards/ProductCards';
import ProductsList from './components/ProductList/ProductsList';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



function App() {
  
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  
  const openFirstModal = () => {
    setIsFirstModalOpen(true);
  };

  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  const handleClickOnOverlay = () => {
    closeFirstModal();
    closeSecondModal();
  }

  return (
    <div className='App container'>
        <Header />

        {/* <Button 
          backgroundColor = "red"
          text = "Open first modal"
          onClick={openFirstModal}
        />

        <Button 
          backgroundColor = "green"
          text = "Open second modal"
          onClick={openSecondModal}
        />

        <Modal 
          isOpen={isFirstModalOpen}
          header="First modal header text"
          closeButton={closeFirstModal} 
          text="I am modal text"
          action = {<Button text="Nope" backgroundColor = "red" />}
          actionOk = {<Button text="Ok" backgroundColor = "Green"/>}
        />

        <Modal 
          isOpen={isSecondModalOpen}
          header="It`s a second modal header text"
          closeButton={closeSecondModal} 
          text="Text of 2nd modal"
          action = {<Button text="Nope" backgroundColor = "red" />} 
          actionOk = {<Button text="Ok" backgroundColor = "Green"/>}
        />
        {isFirstModalOpen && <div className="overlay" onClick={handleClickOnOverlay}/>}
        {isSecondModalOpen && <div className="overlay" onClick={handleClickOnOverlay}/>} */}
      <div className='main__wrapper'>
        <ProductsList />
        <ProductCards /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;

