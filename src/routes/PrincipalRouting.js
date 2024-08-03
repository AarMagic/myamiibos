import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Inicio } from '../components/Inicio'

export const PrincipalRouting = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/inicio" />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/search/:name' element={""} />
        <Route path='/amiibos/' element={""} />
        <Route path='/amiibos/amiibo/:name' element={""} />
        <Route path='/amiiboseries/:amiiboseries' element={""} />
        <Route path='/gameseries/:gameseries' element={""} />
      </Routes>
    </BrowserRouter>
  )
}