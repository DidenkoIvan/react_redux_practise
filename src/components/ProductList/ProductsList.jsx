import React, { useState, useEffect } from 'react';
import "./ProductList.scss";
import Button from '../Button/Button';
import ModalForm from '../Modal/Modal';
import Star from '../STAR/Star';
import { useDispatch, useSelector } from 'react-redux';
import { openModalFromList, closeModalFromList  } from '../../features/productListSlice';

function ProductList({ click, data, modalOpen }) {
  const [productsList, setProductsList] = useState(null);
  
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.PROD_LIST_MODAL.openModalFromList);
  const article = useSelector((state) => state.PROD_LIST_MODAL.article);
  
  const ProductCardButton = (article) => {
    dispatch(openModalFromList(article));
  };

  const closeModalHandler = () => {
    dispatch(closeModalFromList());
  };

  useEffect(() => {

    const url = './products.json';

    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
      
        setTimeout(() => {setProductsList(jsonData) }, 2000)
        localStorage.setItem('products', JSON.stringify(jsonData))
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      ;
  }, []);  

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

export default ProductList;

