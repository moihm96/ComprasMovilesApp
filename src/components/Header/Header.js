import React, { useContext } from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { AppContext } from '../../AppContext';

export function Header() {
  const { numCompras } = useContext(AppContext);
  return (
    <div className="header-container">
      <h5>Compras móviles</h5>

      <BreadCrumbs />

      <div className="icon-container">
        <ShoppingCartIcon />
        <h5>{numCompras}</h5>
      </div>

    </div>
  );
}
