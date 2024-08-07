import React from 'react';
import './Card.css';
import { redirect } from 'react-router-dom';
export const Card = ({element}) => {
    const showElement = () => {
        
    }
    return (
        <article onClick={showElement}>
            <div className='card'>
                <header>
                    <h3 className=' card-name'>{element.character}</h3>
                    <p className='cardsubname'>Zelda</p>
                </header>
                <img className='card-image' src={element.image} alt={`${element.character} amiibo`} />
            </div>
        </article>
    )
}