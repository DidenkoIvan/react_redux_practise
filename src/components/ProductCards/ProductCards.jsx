import axios from 'axios';
import React, { Component } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import "./ProductCards.scss";


class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [], 
            // showModal: false,
            isFavorited: false,
          };
    }

    toggleFavorite = () => {
      this.setState((prevState) => ({
        isFavorited: !prevState.isFavorited,
      }));
    };


    // openModal = () => {
    //   this.setState({ showModal: true });
    // }
  
    // closeModal = () => {
    //   this.setState({ showModal: false });
    // }

    componentDidMount() {
        axios.get('../products.json')
          .then(response => {
            console.log(response);
            this.setState({ products: response.data })
          })
          .then((data) => {
            console.log(data);
            localStorage.setItem('products', JSON.stringify(data))
          })
          .catch(error => {
            console.error('Помилка при отриманні даних:', error)
          });
      }

      render() {
        const { products } = this.state;
        const { isFavorited } = this.state;

        return (
          <div className='productCards'>
            <h1>Перелік товарів: </h1>
            <ul className='productCards__list'>
              {products.map(product => (
                <li className='productCards__list_item' key={product.name}>
                    <img src={product.image} alt={`Image`} />
                    <h2>{product.name}</h2>
                    <p>Article: {product.article}</p>
                    <p>Color: {product.color}</p>
                    <p>Price: {product.price}</p>
                    <Button onClick={this.openModal} text="Add to cart" />
                      {this.state.showModal && (
                      <Modal onClose={this.closeModal} />
                     )}
                     <button onClick={this.toggleFavorite} className={`favorite-button ${isFavorited ? 'active' : ''}`}>
                      <span role="img" aria-label="favorite">⭐</span>
                      </button>
                </li>
              ))}
            </ul>
          </div>
        );
      }
}

export default Products;