import './Favourite.scss';
import React, { useState } from 'react';
import Star from '../STAR/Star'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Favourite() {
    const [favorites, setFavorites] = useState([]);


    const toggleFavorite = (favouriteItem) => {
        if (favorites.includes(favouriteItem)) {
            setFavorites(favorites.filter((item) => item !== favouriteItem));
        } else {
            setFavorites([...favorites, favouriteItem]);
        }
    };

    return (
        <>
            < Header />
            <div>
                <h1>Favorite Items</h1>
                <div>
                    <h2>Favorites:</h2>
                    <ul>
                        {favorites.map((favorite) => (
                            <li key={favorite}>{favorite}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Favourite;