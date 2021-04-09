import React from 'react';
import { imagePadding, rowMaxHeight, rowNormalHeight } from 'restrictions';
import { useDispatch } from 'react-redux';
import { deleteImageAction } from 'redux/actions/galeryAction';
import deleteIcon from 'resources/delete.svg';
import placeholder from 'resources/placeholder.png';
import './imageCard.css';

export default function ImageCard({ index, url, cardNormalWidth, rowScale, isLastRow }) {
  const dispatch = useDispatch();

  const calcCardWidth =
    isLastRow && rowNormalHeight * rowScale > rowMaxHeight
      ? rowMaxHeight * (cardNormalWidth / rowNormalHeight)
      : cardNormalWidth * rowScale;
  const calcCardHeight =
    isLastRow && rowNormalHeight * rowScale > rowMaxHeight
      ? rowMaxHeight
      : rowNormalHeight * rowScale;

  const cardStyle = {
    width: calcCardWidth + 'px',
    height: calcCardHeight + 'px',
  };

  const imgStyle = {
    backgroundImage: 'url(' + placeholder + ')',
    backgroundSize: 'cover',
  };

  const handleDelete = () => {
    dispatch(deleteImageAction(index));
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
      <button className="card__delete" onClick={handleDelete}>
        <img src={deleteIcon} alt="Delete" />
      </button>
    </div>
  );
}
