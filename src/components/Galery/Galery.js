import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cardsSelector,
  galeryWidthSelector,
  isChangedCalcSelector,
  rowsSelector,
} from 'redux/selectors/calcSelector';
import { galleryImagesSelector } from 'redux/selectors/galerySelector';
import { setCalcResultAction, setGaleryWidthAction } from 'redux/actions/calcAction';
import EmptyGalery from 'components/EmptyGalery';
import ImageCard from 'components/ImageCard';
import './galery.scss';

export default function Galery() {
  const galery = useSelector(galleryImagesSelector);
  const galeryWidth = useSelector(galeryWidthSelector);
  const isChanged = useSelector(isChangedCalcSelector);
  const cards = useSelector(cardsSelector);
  const rows = useSelector(rowsSelector);

  const dispatch = useDispatch();
  const galeryRef = useRef(null);

  if (galeryRef.current && galeryRef.current.clientWidth !== galeryWidth) {
    dispatch(setGaleryWidthAction(galeryRef.current.clientWidth));
  }

  if (isChanged) {
    dispatch(setCalcResultAction(galery));
  }

  useEffect(() => {
    if (galeryRef.current) {
      dispatch(setGaleryWidthAction(galeryRef.current.clientWidth));
    }
  }, [dispatch, galeryRef]);

  return (
    <div className="galery" ref={galeryRef}>
      {!cards.length && <EmptyGalery />}

      {!!cards.length &&
        cards.length === galery.length &&
        galery.map((image, index) => (
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
