import React, { useState } from 'react';
import "./Star.css";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/favourites/favourites.slice';

function Star() {
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.favourites)

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
                    dispatch(actions.toggleAddToFavourites)
                }} 
                style={{cursor: 'pointer'}}>⭐
            </span>    
      </div> 
    )
}

export default Star;