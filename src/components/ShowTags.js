import React, { useEffect, useState } from 'react'
import { Tag } from './Tag'
import './Tags.css'
import { useAsync } from '../hooks/useAsync'


export const ShowTags = ({ url }) => {
    const {datos, cargando, limitData } = useAsync(url)
    const [tags, setTags] = useState([])
    useEffect(() =>{
        if (!cargando && datos.length > 0 && tags.length === 0) {
            const limitedData = limitData(20)
            setTags(limitedData)
        }
    }, [cargando, datos, tags, limitData])
    return (
        <div className='tags'>
            {
                cargando ?
                <p>Cargando...</p>
                :
                tags.map((tag, index) => {
                    return <Tag key={index} tagname={tag.name} />
                })
            }
        </div>
    )
}
