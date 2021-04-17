import React, { useEffect, useRef, useState } from 'react';
import ImageCard from 'components/ImageCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  cardsSelector,
  galeryWidthSelector,
  isChangedCalcSelector,
  rowsSelector,
  galleryImagesSelector,
} from 'redux/selectors';
import './galery.scss';
import { setCalcResultAction, setGaleryWidthAction } from 'redux/actions/calcAction';
import { addImagesFromDropAction } from 'redux/actions/galeryAction';

export default function Galery() {
  const [dropFieldClasses, setDropFieldClasses] = useState(['galery__drop-field']);
  const galery = useSelector(galleryImagesSelector);
  const galeryWidth = useSelector(galeryWidthSelector);
  const isChanged = useSelector(isChangedCalcSelector);

  const dispatch = useDispatch();
  const galeryRef = useRef(null);

  useEffect(() => {
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
    setDropFieldClasses(['galery__drop-field', 'galery__drop-field--drop-enter']);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = () => {
    setDropFieldClasses(['galery__drop-field']);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    dispatch(addImagesFromDropAction(files));
    setDropFieldClasses(['galery__drop-field']);
  };

  return (
    <div className="galery" ref={galeryRef}>
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

      <div
        className={dropFieldClasses.join(' ')}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      />
    </div>
  );
}
