import React from 'react';
import { imagePadding, rowMaxHeight, rowNormalHeight } from 'restrictions';
import { useDispatch } from 'react-redux';
import { handleDeleteImageAction } from 'redux/actions/galeryAction';
import deleteIcon from '../../assets/delete.svg';
import './imageCard.scss';

export default function ImageCard({ index, url, cardNormalWidth, rowScale, isLastRow }) {
  const dispatch = useDispatch();

  const calcCardWidth =
    isLastRow && rowNormalHeight * rowScale > rowMaxHeight
      ? cardNormalWidth * (rowMaxHeight / rowNormalHeight)
      : cardNormalWidth * rowScale;
  const calcCardHeight =
    isLastRow && rowNormalHeight * rowScale > rowMaxHeight
      ? rowMaxHeight
      : rowNormalHeight * rowScale;

  const cardStyle = {
    width: calcCardWidth + 'px',
    height: calcCardHeight + 'px',
  };

  const handleDelete = () => {
    dispatch(handleDeleteImageAction(index));
  };

  return (
    <div style={cardStyle} className="card">
      <img
        className="card__image"
        src={url}
        alt="img"
        width={calcCardWidth - imagePadding * 2 + 'px'}
        height={calcCardHeight - imagePadding * 2 + 'px'}
      />
      <button className="card__delete-btn" onClick={handleDelete}>
        <img src={deleteIcon} alt="Delete" />
      </button>
    </div>
  );
}
