import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Inicio } from '../components/Inicio'
import { Amiibos } from '../components/Amiibos'
import { Amiiboseries } from '../components/Amiiboseries'
import { Gameseries } from '../components/Gameseries'
import { ShowCard } from '../components/ShowCard'

export const PrincipalRouting = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/amiibos/" element={<Amiibos />} />
        <Route path="/search/:name" element={<Amiibos />} />
        <Route path="/amiiboseries/" element={<Amiiboseries />} />
        <Route path="/amiiboseries/:amiiboseries" element={<Amiiboseries />} />
        <Route path="/gameseries/" element={<Gameseries />} />
        <Route path="/gameseries/:gameseries" element={<Gameseries />} />
        <Route path='/amiibo/:id' element={<ShowCard />} />
      </Routes>
    </BrowserRouter>
  )
}