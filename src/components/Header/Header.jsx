import "./Header.scss";
// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillBasketFill } from "react-icons/bs";

function Header({cartLength}) {

    return (
        <div className="header">
            <div className="header_icon">
                <Link to="/"> Home-icon </Link>
            </div>
            <ul className="header_items">
                <li className="header_favorite"><Link to="/Favourite">⭐</Link></li> 
                <li className="header_cart"><Link to="/Cart"><BsFillBasketFill /></Link></li>
                <p>{cartLength}</p>
            </ul>
        </div>
    )
}

export default Header;