import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ProductCards from './components/ProductCards/ProductCards';
import ProductsList from './components/ProductList/ProductsList';
import Cart from './components/Cart/Cart';
import Favourite  from './components/Favourite/Favourite';

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
useEffect(() => {
    window.addEventListener('beforeunload', clearLocalStorage);
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  function addToCart(article) {
    setCart((prev) => {
      const newArray = [...prev, article];
      localStorage.setItem('cart', JSON.stringify(newArray));
      return newArray
    })
  }
// outletcontext
  return (
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart}/>} />
      <Route path="/Cart" element={<Cart />}/>
      <Route path="/Favourite" element={<Favourite />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

function Home({addToCart}) {
  return (
    <div className='App container'>
      <div className='main__wrapper'>
        <ProductsList click={addToCart}/>
        <ProductCards click={addToCart}/> 
      </div>
    </div>
  );
}


export default App;

