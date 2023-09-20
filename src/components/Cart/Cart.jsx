import React, { useState, useEffect } from 'react';
import "./Cart.scss";
import Button from '../Button/Button';
import ModalForm from '../Modal/Modal';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
 

function Cart() {  
     
    const [cart, setCart] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [filteredList2, setFilteredList2] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    let totalPrice = 0;

    useState(() => {
        const allProd = JSON.parse(localStorage.getItem('products') || '[]');
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(savedCart);
        setAllProducts(allProd)
    }, []);

    useEffect(() => {
        const filteredList = allProducts.filter(item => cart.includes(item.article));
        setFilteredList2(filteredList);
    }, []);

    for (const product of filteredList2) {
        totalPrice += product.price;
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    function removeItem(indexToRemove) {
      
        setFilteredList2((prevItems) => {
            return prevItems.filter((item, index) => index !== indexToRemove);
        });
    }

    return (
        <>
        <Header />
            <div className="cart">
                <div className="cart__header">
                    <h2>Shopping Cart</h2>
                </div>
                <div className="cart__items">
                    <ol className="cart__items_list">
                        {filteredList2.map((item, index) => (
                            <li key={index}>
                                Article: {item.article}
                                Name: {item.name}
                                Price: {item.price}
                            <button className={"cart__delete-button"} onClick={() => {setIsModalOpen(true)}}> X </button>
                            <ModalForm
                                isOpen={isModalOpen}
                                header={"DELETE from CART"}
                                text={"Are you sure you want to delete this item from cart?"}
                                closeButton={closeModal}
                                action={<Button text="Nope" backgroundColor="pink" />}
                                actionOk={<Button text="Delete" backgroundColor="Green" onClick={() => {
                                    removeItem(index)
                                    closeModal() }}/>}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
                <div>
                    <p className='cart__totalPrice'>Total price: ${totalPrice}</p>
                    <p>Quantity of products: {filteredList2.length}</p>
                </div>
                <div className='buttons__container'>
                    <Button text="Place new order" backgroundColor="green" />
                    <Button text="Clear cart" backgroundColor="red" onClick={() => {
                        // It`s temporarry solution below, will be changed soon 
                        window.location.reload();
                    }} />
                </div>
            </div>
            <Footer /> 
        </>
    )
}

export default Cart;

