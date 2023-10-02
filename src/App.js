import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ProductCards from './components/ProductCards/ProductCards';
import ProductsList from './components/ProductList/ProductsList';
import Cart from './components/Cart/Cart';
import Favourite  from './components/Favourite/Favourite';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import { useTheme } from './ThemeContext/ThemeContext';

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  console.log(cart);
// useEffect(() => {
//     window.addEventListener('beforeunload', clearLocalStorage);
//     return () => {
//       window.removeEventListener('beforeunload', clearLocalStorage);
//     };
//   }, []);

//   const clearLocalStorage = () => {
//     localStorage.clear();
//   };

  function addToCart(article) {
    setCart((prev) => {
      const newArray = [...prev, article];
      localStorage.setItem('cart', JSON.stringify(newArray));
      return newArray
    })
  }
 
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
  const { theme } = useTheme();
  return (
    <>
      <div className={`${theme}-theme`}> 
        <Header />
        <div className='App container'>
        <ThemeSwitcher />
          <div className='main__wrapper'>
              <ProductsList click={addToCart}/>
              <ProductCards click={addToCart}/> 
          </div>
        </div>
        <Footer />  
      </div>
    </>
  );
}


export default App;



