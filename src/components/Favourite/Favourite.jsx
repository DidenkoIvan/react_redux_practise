import './Favourite.scss';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Favourite() {
  
    return (
        <>
            < Header />
            <div>
                <h1>Favorite Items</h1>
                <div>
                    <h2>Favorites:</h2>
                    <ul>
                        {/* {favorites.map((favorite) => (
                            <li key={favorite}>{favorite}</li>
                        ))} */}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Favourite;