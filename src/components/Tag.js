import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Tag = ({tagname}) => {
  const [color, setColor] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    const number = Math.floor(Math.random() * 5) + 1;
    setColor(`tag-${number}`)
  }, [])

  const showAmiibos = () => {
    navigate(`/amiiboseries/${tagname}`);
  }
  
  return (
    <div onClick={showAmiibos} className={`tag ${color}`}>
        <p>{tagname}</p>
    </div>
  )
}
