import React, { useState, useEffect } from 'react';
import "./ProductCards.scss";
import Button from '../Button/Button';
import ModalForm from '../Modal/Modal';

function Products() {
  const [productCards, setData] = useState(null);

  useEffect(() => {

    const url = './products.json';

    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        // Store the fetched data in the component's state
        setData(jsonData);
        localStorage.setItem('products', JSON.stringify(jsonData))
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array [] means this effect runs once, similar to componentDidMount in class components

  const [isArticle, setIsArticle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const ProductCardButton = (article) => {
    setIsModalOpen(true);
    setIsArticle(article);
  };

  return (
    <>
      {productCards ? (
        <div className='productCards'>
          <h1>Product Cards: </h1>
          <ul className='productCards__list'>
            {productCards.map(product => (
              <li className='productCards__list_item' key={product.name}>
                <img src={product.image} alt={`Image`} />
                <p>{product.name}</p>
                <p>Article: {product.article}</p>
                <p>Color: {product.color}</p>
                <strong><p>Price: $ {product.price}</p></strong>
                <Button backgroundColor="red" text="Add to Cart" onClick={() => {
                  ProductCardButton(product.article)
                }} />
              </li>
            ))}
          </ul>
          <ModalForm isOpen={isModalOpen}
            article={isArticle}
            header={"Would you like to add this product into the cart ?"}
            text={""}
            closeButton={closeModal}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Products;

