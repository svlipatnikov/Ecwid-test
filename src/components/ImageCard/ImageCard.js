import React from 'react';
import { imagePadding } from 'restrictions';
import placeholder from 'resources/placeholder.png';
import './imageCard.css';

export default function ImageCard({ url, width, height }) {
  const cardStyle = {
    width: width + 'px',
    height: height + 'px',
  };

  const imgStyle = {
    backgroundImage: 'url(' + placeholder + ')',
    backgroundSize: 'cover',
  };

  return (
    <div style={cardStyle} className="card">
      <img
        src={url}
        alt="img"
        width={width - imagePadding * 2 + 'px'}
        height={height - imagePadding * 2 + 'px'}
        style={imgStyle}
      />
    </div>
  );
}
