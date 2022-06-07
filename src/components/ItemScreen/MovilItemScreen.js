import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { URL } from '../../helper/ApiURLs';
import { useFetch } from '../../hooks/useFetch';
import { ImageItem } from './ImageItem';

import { Selector } from '../Selector';
import { AppContext } from '../../AppContext';
import { ListItem } from './ListItem';

export function MovilItemScreen() {
  const { numCompras, setNumCompras } = useContext(AppContext);
  const { movilId } = useParams();
  const { loading, data } = useFetch(`${URL}/product/${movilId}`);
  const [colorCodigo, setColorCodigo] = useState('');
  const [almacenCodigo, setAlmacenCodigo] = useState('');
  const navigate = useNavigate();
  const onClick = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: data.id,
        colorCode: colorCodigo,
        storageCode: almacenCodigo,
      }),
    };
    fetch(`${URL}/cart`, requestOptions)
      .then((response) => response.json())
      .then((dato) => { if (dato) setNumCompras(parseInt(numCompras) + dato.count); });
  };

  return (
    loading
      ? (
        <div className="alert alert-info text-center">
          Loading...
        </div>
      )
      : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <ImageItem data={data} />
          <ListItem data={data} />
          <div style={{ flex: '0 0 50%' }}>
            <Selector
              optionsR={data.options.storages}
              setCodigo={setAlmacenCodigo}
              nameLabel="Almacenamiento"
            />
            <Selector
              nameLabel="Color"
              optionsR={data.options.colors}
              setCodigo={setColorCodigo}
            />
            <button type="button" style={{ marginLeft: '1.5%', marginBottom: '2%' }} className="btn btn-outline-info" onClick={onClick}> Añadir a compra </button>
            <button type="button" style={{ marginLeft: '1.5%', marginBottom: '2%' }} className="btn btn-outline-info" onClick={() => { navigate('/'); }}>Volver a página principal</button>
          </div>
        </div>

      )

  );
}
