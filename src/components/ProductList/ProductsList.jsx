import React, { useState, useEffect } from 'react';
import "./ProductList.scss";
import Button from '../Button/Button';
import ModalForm from '../Modal/Modal';
import Star from '../STAR/Star';

function ProductList({click}) {
  const [productsList, setData] = useState(null);
  const [isArticle, setIsArticle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    const url = './products.json';

    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        
        setData(jsonData);
        localStorage.setItem('products', JSON.stringify(jsonData))
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);  

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const ProductListButton = (article) => {
    setIsModalOpen(true);
    setIsArticle(article);
  };

  
  return (
    <>
      {productsList ? (
        <div className='productsList'>
          <h1>Product list: </h1>
          <ul className='productsList_list'>
            {productsList.map(product => (
              <li className='productsList_item' key={product.name}>
                  <img src={product.image} alt={`/`} />
                  <p className='productsList_item_name'>{product.name}</p>
                  <p>Article: {product.article}</p>
                  <p>Color: {product.color}</p>
                  <p className='productsList_item_price'>Price: $ {product.price}</p>
                  <Button backgroundColor="red" text="Add to Cart" onClick={() => {
                    ProductListButton(product.article)
                  }} />
                  <Star />
              </li>
            ))}
          </ul>
          <ModalForm isOpen={isModalOpen} 
            article={isArticle}
            header={"Would you like to add this product into the cart ?"}
            text={"Would you like to add this product into the cart ?"}
            closeButton={closeModal}
            action={<Button text="Nope" backgroundColor="pink" />}
            actionOk={<Button text="Ok" backgroundColor="Green" onClick={() => {
              click(isArticle)
              closeModal()
            }}/>}
          />
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductList;



