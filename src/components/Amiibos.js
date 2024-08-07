import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AmiibosContext } from '../context/AmiibosContext'
import { Card } from './Card';
import './Amiibos.css'
import { useArray } from '../hooks/useArray';

export const Amiibos = () => {
  const allAmiibos = useContext(AmiibosContext);
  const [amiibosState, setAmiibosState] = useState([]);
  const { setData, setGroupNumberState, getGroup , groupNumberState} = useArray();
  const { name } = useParams();

  useEffect(() => {
    setData(allAmiibos)
  }, [])

  useEffect(() => {
    setData(amiibosState);
    setGroupNumberState(50);
  }, [amiibosState, setData, setGroupNumberState]);

  useEffect(() => {
    if (groupNumberState > 0) {
      const firstAmiibos = getGroup();
      console.log(firstAmiibos);
    }
  }, [groupNumberState]);



  const nextPage = () => {
    const nextGroup = getGroup()
    if (nextGroup.length <= 0) {
      console.error("error: empty array")
    } else {
      setAmiibosState(nextGroup)
    }

  }
  const previousPage = () => {
    const previousGroup = getGroup("previous")
    if (previousGroup.length <= 0) {
      console.error("error: empty array")
    } else {
      setAmiibosState(previousGroup)
    }

  }

  return (
    <div className='amiibos content'>
      <div className='buttons'>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div className='amiibos-container content'>
        {
          amiibosState.length <= 0
            ? "Cargando..."
            : amiibosState.map((element, index) => {
              return <Card key={index} element={element} />
            })
        }
      </div>
    </div>
  )
}
