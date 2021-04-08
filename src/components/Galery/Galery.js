import React from 'react';
import ImageCard from 'components/ImageCard';
import { useSelector } from 'react-redux';
import { rowNormalHeight } from 'restrictions';
import { contentWindowWidth, galleryImagesSelector } from 'redux/selectors';
import './galery.css';

export default function Galery() {
  const galery = useSelector(galleryImagesSelector);
  const contentWidth = useSelector(contentWindowWidth);
  console.log(contentWidth);

  const getCardWidth = (imgWidth, imgHeight) => (rowNormalHeight / imgHeight) * imgWidth;

  const getRowsScaleArr = (imagesArr) => {
    let rowNumber = 0;
    const rowsWidth = imagesArr.reduce((acc, image) => {
      const cardWidth = getCardWidth(image.width, image.height);
      if (!acc[rowNumber]) acc[rowNumber] = 0;
      if (acc[rowNumber] + cardWidth > contentWidth) acc[++rowNumber] = cardWidth;
      else acc[rowNumber] = acc[rowNumber] + cardWidth;
      return acc;
    }, []);
    return rowsWidth.map((rowWidth, rowNumber) => {
      if (rowNumber === rowsWidth.length - 1) return 1;
      return contentWidth / rowWidth;
    });
  };

  const getRowScale = (imagesArr, imageIndex) => {
    let rowNumber = 0;
    let rowWidth = 0;
    for (let i = 0; i <= imageIndex; i++) {
      const cardWidth = getCardWidth(imagesArr[i].width, imagesArr[i].height);
      if (rowWidth + cardWidth > contentWidth) {
        rowNumber++;
        rowWidth = cardWidth;
      } else rowWidth = rowWidth + cardWidth;
    }
    return getRowsScaleArr(imagesArr)[rowNumber];
  };

  return (
    <div className="galery">
      {galery.map(({ url, width, height }, index) => (
        <ImageCard
          url={url}
          cardWidth={getCardWidth(width, height)}
          rowScale={getRowScale(galery, index)}
          key={url}
        />
      ))}
    </div>
  );
}
