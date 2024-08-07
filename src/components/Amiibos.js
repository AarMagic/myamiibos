import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AmiibosContext } from '../context/AmiibosContext'
import { Card } from './Card';
import './Amiibos.css'
import { useArray } from '../hooks/useArray';

export const Amiibos = () => {
  const amiibos = useContext(AmiibosContext);
  const [amiibosState, setAmiibosState] = useState([]);
  const { data, setNextGroup, setData, setpreviousGroup, getGroup, group } = useArray({
    data: [],
    separation: 50
  })

  useEffect(() => {
    if (Array.isArray(amiibos) && amiibos.length > 0) {
      setData(amiibos)
    }
  }, [amiibos])

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const group = getGroup()
      setAmiibosState(group)
    }
  }, [data])

  useEffect(() => {
    if (group.from >= 0 && group.to > 0) {
      const group = getGroup()
      setAmiibosState(group)
    }
  }, [group])

  const previousPage = () => {
    setpreviousGroup()
  }

  const nextPage = () => {
    setNextGroup()
  }

  return (
    <div className='amiibos content'>
      <div className='buttons'>
        {
          amiibosState.length > 0 ?
            <>
              <button onClick={previousPage}>Previous</button>
              <button onClick={nextPage}>Next</button>
            </>
            :
            ""
        }
      </div>
      <div className='amiibos-container content'>
        {
          amiibosState.length > 0 ?
            amiibosState.map((element, index) => {
              return <Card key={index} element={element} />
            })
            :
            "Cargando..."
        }
      </div>
      <div className='buttons'>
        {
          amiibosState.length > 0 ?
            <>
              <button onClick={previousPage}>Previous</button>
              <button onClick={nextPage}>Next</button>
            </>
            :
            ""
        }
      </div>
    </div>
  )
}
