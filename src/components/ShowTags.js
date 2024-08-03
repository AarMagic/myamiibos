import React from 'react'
import { Tag } from './Tag'
import './Tags.css'


export const ShowTags = (tags = []) => {
    return (
        <div className='tags'>
            <ul>
                {/* <li>
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                </li>
                <li>
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                </li> */}
            </ul>
        </div>
    )
}
