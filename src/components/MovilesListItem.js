import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './ItemScreen/Item';

export function MovilesListItem({
  id, brand, imgUrl, model, price,
}) {
  return (
    <div className="col">

      <div className="row mt-5">
        <div className="col-4">
          <img
            src={imgUrl}
            alt={model}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />

        </div>

        <div className="col-8">
          {brand ? (
            <h3>
              {brand}
            </h3>
          ) : (<h3> Marca: No disponible</h3>)}
          <ul className="list-group list-group-flush">
            <Item
              item={model}
              nombreItem="Modelo"
            />
            <Item
              item={price ? `${price} $` : price}
              nombreItem="Precio"
            />
            <li className="list-group-item"><Link to={`/${id}`}>Ver más...</Link></li>
          </ul>
        </div>
      </div>

    </div>
  );
}
