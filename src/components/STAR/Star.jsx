import React, { useState } from 'react';
import "./Star.css";

function Star() {
    const [isFavorite, setIsFavorite] = useState(false);
    const starColor = isFavorite ? 'yellow' : 'gray'; 
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
      }
    return (
       <div className='start__wrapper'>
            <span 
                className={starColor} 
                onClick={() => {
                    toggleFavorite()
                }} 
                style={{cursor: 'pointer'}}>⭐
            </span>    
      </div> 
    )
}

export default Star;