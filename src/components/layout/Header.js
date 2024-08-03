import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header-principal'>
        <h1>MyAmiibos</h1>
        <nav className='nav-principal'>
            <ul>
                <li>
                    <NavLink
                    to="/inicio" 
                    className={({isActive}) => isActive ? "active" : ""}
                    >Inicio</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/amiibos/" 
                    className={({isActive}) => isActive ? "active" : ""}
                    >Amiibos</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/amiiboseries/" 
                    className={({isActive}) => isActive ? "active" : ""}
                    >Amiibo Series</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/gameseries/" 
                    className={({isActive}) => isActive ? "active" : ""}
                    >Amiibo GameSeries</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
