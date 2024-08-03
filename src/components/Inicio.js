import React from 'react'
import { Card } from './Card'
import { Slider } from './Slider'
import { ShowTags } from './ShowTags'
export const Inicio = () => {
    const content = [
        <Card name="AA" />,
        <Card name="BB" />,
        <Card name="CC" />,
        <Card name="DD" />,
        <Card name="AA" />,
        <Card name="BB" />,
        <Card name="CC" />,
        <Card name="DD" />,
        <Card name="EE" />
    ]
    return (
        <div className='inicio content'>
            <section>
                <article>
                    <h2>Amiibos</h2>
                    <Slider elements={content} />
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
