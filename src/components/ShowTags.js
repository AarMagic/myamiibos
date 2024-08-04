import React, { useEffect, useState } from 'react'
import { Tag } from './Tag'
import './Tags.css'
import { useAsync } from '../hooks/useAsync'
import { useArray } from '../hooks/useArray'


export const ShowTags = ({ url }) => {
    const {datos, cargando } = useAsync(url)
    const [tags, setTags] = useState([])
    const {data, limitArray, setData}  = useArray()
    useEffect(() => {
        if (!cargando) {
            setData(datos)
        }
    }, [cargando, datos, setData])

    useEffect(() =>{
        if (!cargando && datos.length > 0 && tags.length === 0) {
            const limitedData = limitArray(20)
            setTags(limitedData)
        }
    }, [cargando, datos, tags, limitArray])
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