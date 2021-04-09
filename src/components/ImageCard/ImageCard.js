import React from 'react';
import { imagePadding, rowMaxHeight, rowNormalHeight } from 'restrictions';
import placeholder from 'resources/placeholder.png';
import './imageCard.css';
import { useSelector } from 'react-redux';
import { contentWidthSelector } from 'redux/selectors';

export default function ImageCard({ url, cardWidth, rowScale, isLastRow }) {
  const contentWidth = useSelector(contentWidthSelector);
  const fullWidth = cardWidth * rowScale > contentWidth; //картинка шире чем контент

  let calcCardWidth;
  let calcCardHeight;
  if (fullWidth) {
    calcCardWidth = contentWidth;
    calcCardHeight = rowNormalHeight * (contentWidth / (cardWidth * rowScale));
  } else if (isLastRow && rowNormalHeight * rowScale > rowMaxHeight) {
    calcCardWidth = cardWidth * (rowMaxHeight / rowNormalHeight);
    calcCardHeight = rowMaxHeight;
  } else {
    calcCardWidth = cardWidth * rowScale;
    calcCardHeight = rowNormalHeight * rowScale;
  }

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
