import React from 'react';
import './Card.css';
import { redirect, useNavigate } from 'react-router-dom';
export const Card = ({element}) => {
    const navigate = useNavigate()
    const showElement = () => {
         const {head, tail} = element;
         const id = `${head}${tail}`
         navigate(`/amiibo/${id}`)
    }
    return (
        <article onClick={showElement}>
            <div className='card'>
                <header>
                    <h3 className=' card-name'>{element.character}</h3>
                    <p className='cardsubname'>{element.amiiboSeries}</p>
                </header>
                <img className='card-image' src={element.image} alt={`${element.character} amiibo`} />
            </div>
        </article>
    )
}