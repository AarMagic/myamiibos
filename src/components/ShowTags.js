import React, { useEffect, useState } from 'react'
import { Tag } from './Tag'
import './Tags.css'
import { useAsync } from '../hooks/useAsync'

export const ShowTags = ({ url }) => {
    const [tags, setTags] = useState([])
    const {cargando, datos} = useAsync(url)

    useEffect(() => {
        if (!cargando) {
            setTags(datos)
        }
    }, [cargando])
    
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