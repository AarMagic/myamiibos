import React from 'react';
import './Card.css';
export const Card = ({element}) => {
    return (
        <article>
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
