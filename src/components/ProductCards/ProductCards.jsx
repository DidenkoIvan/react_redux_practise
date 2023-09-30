import React, { useState, useEffect } from 'react';
import "./ProductCards.scss";
import Button from '../Button/Button';
import ModalForm from '../Modal/Modal';
import Star from '../STAR/Star';
import { useDispatch, useSelector } from 'react-redux';
import { openModalCards, closeModalCards } from '../../features/productCardsSlice';

function ProductCards({ click, data, modalOpen }) {
  const [productCards, setProductCards] = useState(null);
  
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.PROD_CARDS_MODAL.openModalCards);
  const article = useSelector((state) => state.PROD_CARDS_MODAL.article);

  const ProductCardButton = (article) => {
    dispatch(openModalCards(article));
  };

  const closeModalHandler = () => {
    dispatch(closeModalCards());
  };

  useEffect(() => {

    const url = './products.json';

    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        setTimeout(() => {setProductCards(jsonData)  }, 3000)
        localStorage.setItem('products1', JSON.stringify(jsonData))
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <>
      {productCards ? (
        <div className='productCards'>
          <h1>Product Cards: </h1>
          <ul className='productCards__list'>
            {productCards.map(product => (
              <li className='productCards__list_item' key={product.name}>
                <img src={product.image} alt={`card`} />
                <p>{product.name}</p>
                <p>Article: {product.article}</p>
                <p>Color: {product.color}</p>
                <strong><p>Price: $ {product.price}</p></strong>
                <Button backgroundColor="red" text="Add to Cart" onClick={() => {
                  ProductCardButton(`${product.name}`)
                }} />
                <Star />
              </li>
            ))}
          </ul>
          <ModalForm isOpen={isModalOpen} 
            article={article}
            header={"Would you like to add this product into the cart ?"}
            text={"Would you like to add this product into the cart ?"}
            closeButton={closeModalHandler}
            action={<Button text="Nope" backgroundColor="pink" />}
            actionOk={<Button text="Ok" backgroundColor="Green" onClick={() => {
              click(article)
              closeModalHandler()
            }}/>}
          />
        </div>
      ) : (
        <p>Loading please wait...</p>
      )}
    </>
  );
}

export default ProductCards;


