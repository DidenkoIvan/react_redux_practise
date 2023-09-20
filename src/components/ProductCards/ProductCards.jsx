import React, { useState, useEffect } from 'react';
import "./ProductCards.scss";
import Button from '../Button/Button';
import ModalForm from '../Modal/Modal';
import Star from '../STAR/Star';
import { connect } from 'react-redux';
import { loadData, openModal, closeModal } from '../actions';

export function Products({ click, data, modalOpen, loadData, openModal, closeModala }) {
  const [productCards, setProductCards] = useState(null);

  useEffect(() => {

    const url = './products.json';

    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        setProductCards(jsonData);
        localStorage.setItem('products1', JSON.stringify(jsonData))
        loadData()
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

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

 

const mapStateToProps = (state) => ({
  data: state.data,
  modalOpen: state.modalOpen,
});

const mapDispatchToProps = {
  loadData,
  openModal,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);


