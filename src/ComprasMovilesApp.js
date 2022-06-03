import React, { useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import { AppRouter } from './routers/AppRouter';

export function ComprasMovilesApp() {
  const [numCompras, setNumCompras] = useState(localStorage.getItem('contCompras') || 0);

  useEffect(() => {
    if (numCompras == 0) return;

    localStorage.setItem('contCompras', numCompras);
  }, [numCompras]);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('contCompras', 0);
      setNumCompras(0);
    }, 3600000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AppContext.Provider value={{ numCompras, setNumCompras }}>
      <AppRouter />
    </AppContext.Provider>

  );
}
