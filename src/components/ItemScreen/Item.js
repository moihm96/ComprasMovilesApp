import React from 'react';

export function Item({ item, nombreItem }) {
  return (
    item
      ? (
        <li className="list-group-item">
          <b>
            {nombreItem}
            :
            {' '}
          </b>
          {item}
        </li>
      )

      : (
        <li className="list-group-item">
          <b>
            {nombreItem}
            :
            {' '}
          </b>
          No disponible
        </li>
      )
  );
}
