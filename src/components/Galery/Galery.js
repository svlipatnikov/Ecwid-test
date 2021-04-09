import React from 'react';
import ImageCard from 'components/ImageCard';
import { useSelector } from 'react-redux';
import {
  cardsSelector,
  contentWidthSelector,
  galleryImagesSelector,
  rowsSelector,
} from 'redux/selectors';
import './galery.css';

export default function Galery() {
  const galery = useSelector(galleryImagesSelector);
  const contentWidth = useSelector(contentWidthSelector);
  const cards = useSelector(cardsSelector);
  const rows = useSelector(rowsSelector);

  return (
    <div className="galery">
      {galery.map((image, index) => (
        <ImageCard
          key={image.url}
          url={image.url}
          cardWidth={cards[index].cardNormalWidth}
          rowScale={contentWidth / rows[cards[index].rowNumber]}
          isLastRow={cards[index].rowNumber === rows.length - 1}
        />
      ))}
    </div>
  );
}
