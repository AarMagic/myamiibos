import React, { useState } from 'react'
import { Tag } from './Tag'
import './Tags.css'

export const ShowTags = ({ url }) => {
    const [tags, setTags] = useState([])
    return (
        <div className='tags'>
            {
                "" ?
                <p>Cargando...</p>
                :
                tags.map((tag, index) => {
                    return <Tag key={index} tagname={tag.name} />
                })
            }
        </div>
    )
}