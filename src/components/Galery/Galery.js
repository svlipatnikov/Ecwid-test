import React from 'react';
import { useSelector } from 'react-redux';
import { cardsSelector, galeryWidthSelector, rowsSelector } from 'redux/selectors/calcSelector';
import { gallerySelector } from 'redux/selectors/galerySelector';
import EmptyGalery from 'components/EmptyGalery';
import ImageCard from 'components/ImageCard';
import './galery.scss';

export default function Galery() {
  const galery = useSelector(gallerySelector);
  const galeryWidth = useSelector(galeryWidthSelector);
  const cards = useSelector(cardsSelector);
  const rows = useSelector(rowsSelector);

  return (
    <div className="galery">
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
