import React from 'react';
import { imagePadding, rowNormalHeight } from 'restrictions';
import placeholder from 'resources/placeholder.png';
import './imageCard.css';
import { useSelector } from 'react-redux';
import { contentWindowWidth } from 'redux/selectors';

export default function ImageCard({ url, cardWidth, rowScale }) {
  const contentWidth = useSelector(contentWindowWidth);

  const fullWidth = cardWidth * rowScale > contentWidth;
  const calcCardWidth = fullWidth ? contentWidth : cardWidth * rowScale;
  const calcCardHeight = fullWidth
    ? rowNormalHeight * (contentWidth / (cardWidth * rowScale))
    : rowNormalHeight * rowScale;

  if (fullWidth) console.log(calcCardWidth, url);
  const cardStyle = {
    width: calcCardWidth + 'px',
    height: calcCardHeight + 'px',
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
        width={calcCardWidth - imagePadding * 2 + 'px'}
        height={calcCardHeight - imagePadding * 2 + 'px'}
        style={imgStyle}
      />
    </div>
  );
}
