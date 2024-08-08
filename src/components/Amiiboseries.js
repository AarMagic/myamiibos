import React, { useEffect, useState } from 'react'
import { ShowTags } from './ShowTags';
import { useParams } from 'react-router-dom';
import { useAsync } from '../hooks/useAsync';
import { Card } from './Card';

export const Amiiboseries = () => {
  const { amiiboseries = ""} = useParams();
  const [data, setDataState] = useState([]);
  const { setData, datos } = useAsync();

  useEffect(() => {
    if (amiiboseries) {
      setData(`https://www.amiiboapi.com/api/amiibo/?amiiboSeries=${amiiboseries}`)
    } 
  }, [amiiboseries])

  useEffect(() => {
    setDataState(datos)
  }, [datos])

  return (
    <div className='amiibos amiibos-container content'>
      {data.length <=0  ? (
        <ShowTags url="https://www.amiiboapi.com/api/amiiboseries" />
      ) : (
        data.map((element, index) => {
          return <Card key={index} element={element} />
        })
      )}
    </div>
  );
};