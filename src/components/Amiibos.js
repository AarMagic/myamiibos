import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AmiibosContext } from '../context/AmiibosContext'
import { Card } from './Card';
import './Amiibos.css'
import { useArray } from '../hooks/useArray';
import { Link, animateScroll as scroll } from "react-scroll";

export const Amiibos = () => {
  let { name } = useParams();
  const amiibos = useContext(AmiibosContext);
  const [amiibosState, setAmiibosState] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const { data, setNextGroup, setData, setpreviousGroup, getGroup, group, filterArray } = useArray({
    data: [],
    separation: 50
  })

  useEffect(() => {
    if (Array.isArray(amiibos) && amiibos.length > 0) {
      setData(amiibos)
    }
  }, [amiibos])


  useEffect(() => {

    if (name) {
      const group = filterArray(name)
      setDataSearch(group)
      
      
    } else{
      if (Array.isArray(data) && data.length > 0) {
        const group = getGroup()
        setAmiibosState(group)
      }
    }


  }, [data, name])

  useEffect(() => {
    if (dataSearch.length > 0) {
      setAmiibosState(dataSearch)
    } else{
      
    }
  }, [dataSearch])

  useEffect(() => {
    if (group.from >= 0 && group.to > 0) {
      const group = getGroup()
      setAmiibosState(group)
    }
  }, [group])

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const previousPage = () => {
    setpreviousGroup()
    scrollToTop()
  }

  const nextPage = () => {
    setNextGroup()
    scrollToTop()
  }

  return (
    <div className='amiibos content'>
      <div className='buttons'>
        {
          amiibosState.length > 0 && !name ?
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
          amiibosState.length > 0 && !name ?
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
