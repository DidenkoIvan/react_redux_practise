import React, { useState } from 'react';
import "./Cart.scss";


function Cart() {
    const [cart, setCart] = useState([]);

    useState(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(savedCart);
    }, []);

    return (
        <>
            <div className="cart">
                <div className="cart__header">
                    <h2>Shopping Cart</h2>
                </div>
                <div className="cart__items">
                    <ul className="cart__items_list">
                        {cart.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p>Total: $0.00</p>
                    <p>Quontity of products: {cart.length}</p>
                </div>
                <button>Place an order</button>
            </div>
        </>
    )
}

<div class="cart">




</div>


export default Cart;