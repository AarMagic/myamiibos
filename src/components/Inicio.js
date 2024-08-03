import React from 'react'
import { Slider } from './Slider'
import { ShowTags } from './ShowTags'
export const Inicio = () => {
    return (
        <div className='inicio content'>
            <section>
                <article>
                    <h2>Amiibos</h2>
                    <Slider />
                </article>
                <article>
                    <h2>Game Series</h2>
                    <ShowTags />
                </article>
                <article>
                    <h2>Amiibo’s Series</h2>
                    <ShowTags />
                </article>
            </section>
        </div>
    )
}
