import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import Products from './Products_cards';
import ProductsList from './Products_list'


function App() {
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const changeBackgroundColor = () => {
    const newColor = "#808080";  
    setBackgroundColor(newColor);
  };
  
  return (
    <div className='App container' style={{ backgroundColor }}>
      {/* <Button
        backgroundColor="blue"
        text="Open first modal"
        onClick= {() => {setFirstModalOpen(true);changeBackgroundColor()}}
      />
      <Button
        backgroundColor="green"
        text="Open second modal"
        onClick={() => {setSecondModalOpen(true);changeBackgroundColor()} }
      /> */}

      {firstModalOpen && (
        <Modal
          header="First Modal"
          closeButton={true}
          text="This is the first modal."
          actions={<button onClick={() => setFirstModalOpen(false)}>Close</button>}
          actionsOk={<button>OK</button>}
          onClose={() => setFirstModalOpen(false)}
        />
      )}

      {secondModalOpen && (
        <Modal
          header="Second Modal"
          closeButton={true}
          text="This is the second modal."
          actions={<button onClick={() => setSecondModalOpen(false)}>Close</button>}
          actionsOk={<button>OK</button>}
          onClose={() => setSecondModalOpen(false)}
        />
      )}
      <ProductsList/>
      <Products />
    </div>
  );
}

export default App;

