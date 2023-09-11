import "./Header.scss";
import { BsFillBasketFill } from "react-icons/bs";

function Header() {
    return (
        <div className="header">
            <div className="header_icon">Icon</div>
            <ul className="header_items">
                <li className="header_favorite">⭐</li>
                <li className="header_cart"><BsFillBasketFill /></li>
            </ul>
        </div>
    )
}

export default Header;