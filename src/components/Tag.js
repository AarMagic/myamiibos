import React, { useEffect, useState } from 'react'

export const Tag = ({tagname}) => {
  const [color, setColor] = useState("")
  useEffect(() => {
    const number = Math.floor(Math.random() * 5) + 1;
    setColor(`tag-${number}`)
  }, [])
  return (
    <div className={`tag ${color}`}>
        <p>{tagname}</p>
    </div>
  )
}
