import React, { useState } from 'react';
import "./Star.css";

function Star({ favouriteItem }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const starColor = isFavorite ? 'yellow' : 'gray'; 

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
      }
    return (
        <div>
            <span onClick={() => {
                toggleFavorite()
            }} className={starColor} style={{cursor: 'pointer'}}>⭐</span>
        </div>
    )
}

export default Star;