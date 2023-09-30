import "./Header.scss";
import { Link } from 'react-router-dom';
import { BsFillBasketFill } from "react-icons/bs";
import React, { useState, useEffect } from 'react';
import SolarSystem from "../SolarSystem/SolarSystem";


function Header() {
    const [quantityOfProdsInCart, setQuantityOfProdsInCart] = useState(0);
    console.log(quantityOfProdsInCart);
    useState(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setQuantityOfProdsInCart(savedCart.length);
      }, []);
     
    return (
        <div className="header">
            <Link to="/">
                <div className="header_icon">
                    <SolarSystem />
                </div>
            </Link>
            <ul className="header_items">
                <li className="header_favorite"><Link to="/Favourite">⭐</Link></li> 
                <li className="header_cart">
                    <Link to="/Cart">
                        <p>{quantityOfProdsInCart}</p> 
                        <BsFillBasketFill />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;