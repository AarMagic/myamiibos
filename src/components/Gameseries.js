import React, { useEffect, useState } from 'react'
import { ShowTags } from './ShowTags';
import { useParams } from 'react-router-dom';
import { useAsync } from '../hooks/useAsync';
import { Card } from './Card';

export const Gameseries = () => {
  const { gameseries="" } = useParams();
  const [data, setDataState] = useState([]);
  const { setData, datos } = useAsync();
  
  useEffect(() => {
    if (gameseries) {
      setData(`https://www.amiiboapi.com/api/amiibo/?gameseries=${gameseries}`)
    } 
  }, [gameseries])

  useEffect(() => {
    setDataState(datos)
  }, [datos])
  
  return (
    <div className='amiibos amiibos-container content'>
      {data.length <=0  ? (
        <ShowTags url="https://www.amiiboapi.com/api/gameseries/" />
      ) : (
        data.map((element, index) => {
          return <Card key={index} element={element} />
        })
      )}
    </div>
  )
}
