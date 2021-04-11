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

export default function Galery() {
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

  return (
    <div className="galery" ref={galeryRef}>
      {galery.map((image, index) => (
        <ImageCard
          key={image.url}
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
