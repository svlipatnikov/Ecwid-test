import { SET_CONTENT_WIDTH } from 'redux/types';
import { containerMaxWidth, containerMinWidth } from 'restrictions';

export const setContentWidthAction = () => {
  let contentWidth;
  if (window.outerWidth < containerMinWidth) contentWidth = containerMinWidth;
  else if (window.outerWidth > containerMaxWidth) contentWidth = containerMaxWidth;
  else contentWidth = window.outerWidth;

  return {
    type: SET_CONTENT_WIDTH,
    payload: contentWidth,
  };
};

// export const calcImageRowNumberAction = (imagesArr, rowMaxWidth) => {
//   let rowNumber = 0;
//   let rowWidth = 0;
//   const imageRowNumberArr = imagesArr.map((img) => {
//     const cardWidth = (rowNormalHeight / img.height) * img.width;
//     if (rowWidth + cardWidth > rowMaxWidth) {
//       rowNumber++;
//       rowWidth = cardWidth;
//     } else {
//       rowWidth = rowWidth + cardWidth;
//     }
//     return rowNumber;
//   });
//   return { type: CALC_IMAGE_ROW_NUMBER, payload: imageRowNumberArr };
// };

// export const calcRowWidthAction = (imagesArr, imageRowNumber) => {
//   console.log('calcRowWidthAction:', imagesArr, imageRowNumber);
//   const rowWidthArr = [];
//   imagesArr.forEach((img, index) => {
//     const cardWidth = (rowNormalHeight / img.height) * img.width;
//     rowWidthArr[imageRowNumber[index]] += cardWidth;
//   });
//   return { type: CALC_ROWS_WIDTH, payload: rowWidthArr };
// };

// export const calcRowScaleAction = (rowWidthArr, rowMaxWidth) => {
//   console.log('calcRowScaleAction:', rowWidthArr, rowMaxWidth);
//   const rowScaleArr = rowWidthArr.map((rowWidth, rowNumber) => {
//     if (rowNumber === rowWidthArr.length - 1) return 1;
//     return rowMaxWidth / rowWidth;
//   });
//   return { type: CALC_ROWS_SCALE, payload: rowScaleArr };
// };
