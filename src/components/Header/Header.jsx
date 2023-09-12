import "./Header.scss";
import Cart from '../Cart/Cart';
import React, { useState, useEffect } from 'react';



function Header() {
   
    return (
        <div className="header">
            <div className="header_icon">Icon</div>
            <ul className="header_items">
                <li className="header_favorite">⭐</li>
                <li className="header_cart">
                    <Cart />
                </li>
            </ul>
        </div>
    )
}

export default Header;