import React, { useRef, useEffect } from 'react';
import ImageCard from 'components/ImageCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  cardsSelector,
  contentWidthSelector,
  galleryImagesSelector,
  rowsSelector,
} from 'redux/selectors';
import './galery.css';
import { setGaleryWidthAction } from 'redux/actions/calcAction';

export default function Galery() {
  const galery = useSelector(galleryImagesSelector);
  const contentWidth = useSelector(contentWidthSelector);
  const cards = useSelector(cardsSelector);
  const rows = useSelector(rowsSelector);

  const dispatch = useDispatch();
  const galeryRef = useRef(null);
  useEffect(() => {
    if (galeryRef.current) dispatch(setGaleryWidthAction(galeryRef.current.clientWidth));
  }, [dispatch, galeryRef]);

  return (
    <div className="galery" ref={galeryRef}>
      {galery.map((image, index) => (
        <ImageCard
          key={image.url}
          index={index}
          url={image.url}
          cardNormalWidth={cards[index].cardNormalWidth}
          rowScale={contentWidth / rows[cards[index].rowNumber]}
          isLastRow={cards[index].rowNumber === rows.length - 1}
        />
      ))}
    </div>
  );
}
