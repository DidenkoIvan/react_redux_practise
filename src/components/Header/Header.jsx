import "./Header.scss";
import { Link } from 'react-router-dom';
import { BsFillBasketFill } from "react-icons/bs";
import React, { useState } from 'react';


function Header() {
    const [quantityOfProdsInCart, setQuantityOfProdsInCart] = useState([]);
    
    useState(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setQuantityOfProdsInCart(savedCart);
      }, []);
      
    return (
        <div className="header">
            <div className="header_icon">
                <Link to="/"> Home-icon </Link>
            </div>
            <ul className="header_items">
                <li className="header_favorite"><Link to="/Favourite">⭐</Link></li> 
                <li className="header_cart">
                    <Link to="/Cart">
                        <p>{quantityOfProdsInCart.length}</p> 
                        <BsFillBasketFill />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;