import { BsFillBasketFill } from "react-icons/bs";
import React, { useState, useEffect } from 'react';
import "./Cart.scss"


function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(savedCart);
    }, []);

    // localStorage.clear();

        return (
        <div className="cart">
            <p>{cart.length}</p>
             <BsFillBasketFill />
        </div>
    )
}

export default Cart;