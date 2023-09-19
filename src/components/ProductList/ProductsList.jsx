import React, { useState, useEffect } from 'react';
import "./ProductList.scss";
import Button from '../Button/Button';
import ModalForm from '../Modal/Modal';
import Star from '../STAR/Star';
import { connect } from 'react-redux';
import { loadData, openModal, closeModal } from '../actions';

export function ProductList({ click, data, modalOpen, loadData, openModal, closeModala }) {
  const [productsList, setProductsList] = useState(null);
  const [isArticle, setIsArticle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    const url = './products.json';

    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        
        setProductsList(jsonData);
        localStorage.setItem('products', JSON.stringify(jsonData))
        loadData()
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      ;
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
                    modalOpen()
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

