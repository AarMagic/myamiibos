import React, { useEffect, useState } from 'react'
import { Tag } from './Tag'
import './Tags.css'
import { useAsync } from '../hooks/useAsync'
import { useArray } from '../hooks/useArray'

export const ShowTags = ({ url, limit }) => {
    const { cargando, datos } = useAsync(url)
    const { data, setData, limitData } = useArray({
        data: [],
        separation: 10
    })
    const [tags, setTags] = useState([])

    useEffect(() => {
        if (!cargando) {
            setData(datos)
        }
    }, [cargando])

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            if (limit) {
                let newData = limitData(10);
                setTags(newData)
            } else{
                setTags(data);
            }
        }
    }, [data])

    return (
        <div className='tags'>
            {
                tags.length <= 0 ?
                    <p>Cargando...</p>
                    :
                    tags.map((tag, index) => {
                        return <Tag key={index} tagname={tag.name} />
                    })
            }
        </div>
    )
}