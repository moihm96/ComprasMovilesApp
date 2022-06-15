import React from 'react';
import './ImageItem.css'
export function ImageItem({ data }) {
  const { imgUrl, model } = data;
  return (
    <div className="image-container">
      <img
        src={imgUrl}
        alt={model}
        width="80%"
        className="img-thumbnail animate__animated animate__fadeInLeft"
      />
    </div>
  );
}
