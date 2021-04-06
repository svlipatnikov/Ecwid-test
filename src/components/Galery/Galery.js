import React from 'react';
import ImageCard from 'components/ImageCard';
import { galleryImages } from 'resources/images';
import { rowHeight, imagePadding, containerMaxWidth } from 'restrictions';
import './galery.css';

export default function Galery() {
  calcRowScale();

  return (
    <div className="galery" style={{ padding: imagePadding }}>
      {galleryImages.map(({ url, width, height }) => {
        const { cardWidth, cardHeigth } = calcCardSize(width, height);
        return <ImageCard url={url} width={cardWidth} height={cardHeigth} key={url} />;
      })}
    </div>
  );
}

const calcCardSize = (imgWidth, imgHeight) => {
  const imageScale = rowHeight / imgHeight;
  const cardWidth = Math.floor(imgWidth * imageScale * 1000) / 1000;
  const cardHeigth = Math.floor(imgHeight * imageScale * 1000) / 1000;
  return { cardWidth, cardHeigth };
};

const calcRowScale = () => {
  const contentWidth =
    window.innerWidth < containerMaxWidth ? window.innerWidth : containerMaxWidth;
  let rowWidth = 0;
  let rowScale = 1;

  galleryImages.forEach((image) => {
    const { cardWidth } = calcCardSize(image.width, image.height);

    if (rowWidth + cardWidth > contentWidth) {
      rowScale = Math.floor((contentWidth * 1000) / rowWidth) / 1000;
      console.log('rowWidth:', rowWidth, ' rowScale:', rowScale);
      rowWidth = cardWidth;
    } else {
      rowScale = 1;
      rowWidth = rowWidth + cardWidth;
    }
  });
  console.log('rowWidth:', rowWidth, ' rowScale:', rowScale);
};
