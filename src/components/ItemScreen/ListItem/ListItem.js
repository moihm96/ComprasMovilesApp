import React from 'react';

import './ListItem.css'

import { Item } from '../Item/Item';

export function ListItem({ data }) {
  const {
    brand, model, price, cpu, ram, os,
    displayResolution, battery, primaryCamera,
    secondaryCmera, dimentions, weight,
  } = data;

  return (
    <div className="list-item-container">
      <h3>
        {brand}

        {model}
      </h3>
      <ul className="list-group list-group-flush">
        <Item
          item={price ? `${price} $` : price}
          nombreItem="Precio"
        />
        <Item
          item={cpu}
          nombreItem="CPU"
        />
        <Item
          item={ram}
          nombreItem="RAM"
        />
        <Item
          item={os}
          nombreItem="Sistema Operativo"
        />
        <Item
          item={displayResolution}
          nombreItem="Resolución de pantalla"
        />

        <Item
          item={battery}
          nombreItem="Batería"
        />
        <Item
          item={Array.isArray(primaryCamera) ? primaryCamera.toString().replaceAll(',', ' ') : primaryCamera}
          nombreItem="Cámara principal"
        />
        <Item
          item={Array.isArray(secondaryCmera) ? secondaryCmera.toString().replaceAll(',', ' ') : secondaryCmera}
          nombreItem="Cámara secundaria"
        />
        <Item
          item={dimentions}
          nombreItem="Dimensiones"
        />
        <Item
          item={weight ? `${weight} gramos` : weight}
          nombreItem="Peso"
        />
      </ul>
    </div>
  );
}
