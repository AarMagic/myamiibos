import React, { useEffect } from 'react'
import { useAsync } from '../hooks/useAsync'
import { useParams } from 'react-router-dom';
import './ShowCard.css';

export const ShowCard = () => {
  const { id } = useParams();
  const { datos, cargando, setData } = useAsync([]);

  useEffect(() => {
    const url = `https://amiiboapi.com/api/amiibo/?id=${id}`;
    setData(url)
  }, [])

  useEffect(() => {

  }, [datos])


  return (
    !cargando && datos.image ?
      <div className='content'>
        <header className='show-card-header'>
          <img src={datos.image} className='show-card-img' alt={`${datos.character - datos.gameSeries}`} />
          <div className='datos'>
            <h2>{datos.name}</h2>
            <p className='show-card-attribute'><span>Release: </span>{datos.release && datos.release.jp}</p>
            <p className='show-card-attribute'><span>Game Series: </span>{datos.gameSeries}</p>
            <p className='show-card-attribute'><span>Game Series: </span>{datos.gameSeries}</p>
            <p className='show-card-attribute'><span>Amiibo’s Series: </span>{datos.amiiboSeries}</p>
          </div>
        </header>
      </div>
      :
      <p>Cargando</p>
  )
}
