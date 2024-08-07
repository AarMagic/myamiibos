import React from 'react'
import { ShowTags } from './ShowTags';

export const Amiiboseries = () => {
  return (
    <div className='content'>
      <ShowTags url="https://www.amiiboapi.com/api/amiiboseries" />
    </div>
  )
}
