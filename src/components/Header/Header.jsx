import "./Header.scss";
import { Link } from 'react-router-dom';
import { BsFillBasketFill } from "react-icons/bs";

function Header() {
  

    return (
        <div className="header">
            <div className="header_icon">
                <Link to="/"> Home-icon </Link>
            </div>
            <ul className="header_items">
                <li className="header_favorite"><Link to="/Favourite">⭐</Link></li> 
                <li className="header_cart">
                    <Link to="/Cart">
                        <p> </p>
                        <BsFillBasketFill />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;