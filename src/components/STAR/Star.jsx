import React, { useState } from 'react';
import "./Star.css";

function Star({ favouriteItem }) {
    const [isFavorite, setIsFavorite] = useState(false);
    
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
      }

    const starColor = isFavorite ? 'yellow' : 'gray';  
    return (
        <div>
            <span onClick={() => {
                toggleFavorite()
            }} className={starColor} style={{cursor: 'pointer'}}>⭐</span>
        </div>
    )
}

export default Star;