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
  const [favourite, setFavourite] = useState(JSON.parse(localStorage.getItem('favourite')) || []);

  function toogleFavorite(article) {
    // prev 
    let favNewArray;  
    if (favourite.includes(article)) {
      console.log(article);
      favNewArray = favourite.filter(item => item !== article)
    } else {
      favNewArray = [...favourite, article]
    }
    setFavourite(favNewArray)
      localStorage.setItem("fav", favNewArray)
  }

 
  function addToCart(article) {
    setCart((prev) => {
      const newArray = [...prev, article];
      localStorage.setItem('cart', JSON.stringify(newArray));
      return newArray
    })
  }
 
  return (
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart} toogleFavorite={toogleFavorite}/>} />
      <Route path="/Cart" element={<Cart />}/>
      <Route path="/Favourite" element={<Favourite />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

function Home({addToCart, toogleFavorite}) {
  const { theme } = useTheme();
  return (
    <>
      <div className={`${theme}-theme`}> 
        <Header />
        <div className='App container'>
        <ThemeSwitcher />
          <div className='main__wrapper'>
              <ProductsList click={addToCart}/>
              <ProductCards click={addToCart} toogleFavorite={toogleFavorite}/> 
          </div>
        </div>
        <Footer />  
      </div>
    </>
  );
}


export default App;



