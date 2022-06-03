import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { MovilesList } from '../components/MovilesList';
import { MovilItemScreen } from '../components/MovilItemScreen';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="movil" element={<MovilesList />} />
        <Route path="movil/:movilId" element={<MovilItemScreen />} />

        <Route path="/" element={<MovilesList />} />
      </Routes>
    </BrowserRouter>
  );
}
