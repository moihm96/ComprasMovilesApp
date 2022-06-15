import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { MovilList } from '../pages/MovilesList/MovilList';
import { MovilItemScreen } from '../pages/MovilItemScreen/MovilItemScreen';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:movilId" element={<MovilItemScreen />} />

        <Route path="/" element={<MovilList />} />
      </Routes>
    </BrowserRouter>
  );
}
