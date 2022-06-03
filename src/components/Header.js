import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BreadCrumbs } from './BreadCrumbs';
import { AppContext } from '../AppContext';

export function Header() {
  const { numCompras } = useContext(AppContext);
  return (
    <div style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '3%', borderBottom: ' 2px solid grey',
    }}
    >

      <h5>Compras móviles</h5>

      <BreadCrumbs />

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ShoppingCartIcon />
        <h5>{numCompras}</h5>
      </div>

    </div>
  );
}
