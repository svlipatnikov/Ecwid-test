import React, { useEffect, useRef } from 'react';
import ImageCard from 'components/ImageCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  cardsSelector,
  galeryWidthSelector,
  isChangedCalcSelector,
  rowsSelector,
  galleryImagesSelector,
} from 'redux/selectors';
import './galery.css';
import { setCalcResultAction, setGaleryWidthAction } from 'redux/actions/calcAction';
import { addImagesFromDropAction } from 'redux/actions/galeryAction';

export default function Galery() {
  const galery = useSelector(galleryImagesSelector);
  const galeryWidth = useSelector(galeryWidthSelector);
  const isChanged = useSelector(isChangedCalcSelector);

  const dispatch = useDispatch();
  const galeryRef = useRef(null);

  useEffect(() => {
    console.log('useEffect');
    if (galeryRef.current) {
      dispatch(setGaleryWidthAction(galeryRef.current.clientWidth));
    }
  }, [dispatch, galeryRef]);

  if (galeryRef.current && galeryRef.current.clientWidth !== galeryWidth) {
    dispatch(setGaleryWidthAction(galeryRef.current.clientWidth));
  }

  if (isChanged) {
    dispatch(setCalcResultAction(galery));
  }

  const cards = useSelector(cardsSelector);
  const rows = useSelector(rowsSelector);
  if (!cards.length || cards.length !== galery.length) return null;

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // TODO on dragEnter style
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // TODO off dragEnter style
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    dispatch(addImagesFromDropAction(files));
  };

  return (
    <div
      className="galery"
      ref={galeryRef}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {galery.map((image, index) => (
        <ImageCard
          key={image.url + index}
          index={index}
          url={image.url}
          cardNormalWidth={cards[index].cardNormalWidth}
          rowScale={galeryWidth / rows[cards[index].rowNumber]}
          isLastRow={cards[index].rowNumber === rows.length - 1}
        />
      ))}
    </div>
  );
}
