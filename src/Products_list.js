import axios from 'axios';
import React, { Component } from 'react';
import Button from './Button';
import Modal from './Modal';

class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
            productsList: [], 
            showModal: false,
            isFavorited: false,
          };
    }

    toggleFavorite = () => {
      this.setState((prevState) => ({
        isFavorited: !prevState.isFavorited,
      }));
    };

    openModal = () => {
      this.setState({ showModal: true });
    }
  
    closeModal = () => {
      this.setState({ showModal: false });
    }

    componentDidMount() {
        axios.get('../products.json')
          .then(response => {
            console.log(response);
            this.setState({ productsList: response.data })
          })
          .catch(error => {
            console.error('Помилка при отриманні даних:', error)
          });
      }

      render() {
        const { productsList } = this.state;
        const { isFavorited } = this.state;

        return (
          <div className='productsList'>
            <h1>Список продуктів: </h1>
            <ul className='productsList_list'>
              {productsList.map(product => (
                <li className='productsList_item' key={product.name}>
                    {/* <img src={product.image} alt={`Image`} /> */}
                    <h2>{product.name}</h2>
                    <p>Article: {product.article}</p>
                    <p>Color: {product.color}</p>
                    <p>Price: {product.price}</p>
                    <Button onClick={this.openModal} text="Add to cart" />
                    {this.state.showModal && (
                      <Modal onClose={this.closeModal}
                      header="Would you like to add this item to cart?"
                      closeButton={true}
                      text="Add to cart" />
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

export default ProductsList;