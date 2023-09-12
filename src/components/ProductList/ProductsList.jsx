import React, { useState, useEffect } from 'react';
import "./ProductList.scss";
import Button from '../Button/Button';
import ModalForm from '../Modal/Modal';

function ProductList() {
  const [productsList, setData] = useState(null);

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
                <img src={product.image} alt={`Image`} />
                <p className='productsList_item_name'>{product.name}</p>
                <p>Article: {product.article}</p>
                <p>Color: {product.color}</p>
                <p className='productsList_item_price'>Price: $ {product.price}</p>
                <Button backgroundColor="red" text="Add to Cart" onClick={() => {
                  ProductListButton(product.article)
                }} />
              </li>
            ))}
          </ul>
          <ModalForm isOpen={isModalOpen} 
            article={isArticle}
            header={"Would you like to add this product into the cart ?"}
            text={""}
            closeButton={closeModal}
            action={<Button text="Nope" backgroundColor="pink" />}
            actionOk={<Button text="Ok" backgroundColor="Green" />}
          />
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductList;


