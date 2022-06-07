import React, { useState } from 'react';

import { useFetch } from '../hooks/useFetch';
import { MovilesListItem } from './MovilesListItem';

import { URL } from '../helper/ApiURLs';

export function MovilesList() {
  const { loading, data } = useFetch(`${URL}/product`);

  const [searchText, setSearchText] = useState('');
  const [searchParam] = useState(['brand', 'model']);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const search = (items) => items.filter((item) => searchParam.some((newItem) => (
    item[newItem]
      .toString()
      .toLowerCase()
      .indexOf(searchText.toLowerCase()) > -1
  )));

  return (
    <div>
      <div style={{ padding: '2%' }}>

        <input
          type="text"
          placeholder="Buscar un móvil"
          className="form-control"
          name="searchText"
          autoComplete="off"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>

      {
        loading
          ? (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
          : (
            <div className="row rows-cols-1 row-cols-md-4 g-4" style={{ padding: '2%' }}>
              {
                search(data).map((movil) => (
                  <MovilesListItem
                    key={movil.id}
                    {...movil}
                  />
                ))
              }
            </div>
          )
      }
    </div>

  );
}
