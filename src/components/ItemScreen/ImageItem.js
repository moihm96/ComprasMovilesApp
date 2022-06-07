import React from 'react';

export function ImageItem({ data }) {
  const { imgUrl, model } = data;
  return (
    <div style={{ flex: '0 0 25%', marginRight: '15%', marginTop: '5%' }}>
      <img
        src={imgUrl}
        alt={model}
        width="80%"
        className="img-thumbnail animate__animated animate__fadeInLeft"
      />
    </div>
  );
}
