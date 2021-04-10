import { SET_CALC_RESULT, SET_GALERY_WIDTH } from 'redux/types';
import { containerMaxWidth, containerMinWidth, rowNormalHeight } from 'restrictions';

export const setGaleryWidthAction = (galeryWidth) => ({
  type: SET_GALERY_WIDTH,
  payload: galeryWidth,
});

export const setCalcResultAction = (galery) => {
  // calc contentWidth
  let contentWidth;
  if (window.outerWidth < containerMinWidth) contentWidth = containerMinWidth;
  else if (window.outerWidth > containerMaxWidth) contentWidth = containerMaxWidth;
  else contentWidth = window.outerWidth;

  // calc cardsArr & rowsArr
  const cardsArr = [];
  const rowsArr = [];
  let rowNumber = 0;
  let rowWidth = 0;

  galery.forEach((image, index) => {
    const cardNormalWidth = (rowNormalHeight / image.height) * image.width;

    if (rowWidth + cardNormalWidth > contentWidth) {
      rowNumber++;
      rowWidth = cardNormalWidth;
    } else {
      rowWidth = rowWidth + cardNormalWidth;
    }

    // заполняем массив cardsArr
    cardsArr[index] = {
      index,
      cardNormalWidth,
      rowNumber,
    };

    // заполняем массив rowsArr
    rowsArr[rowNumber] = rowWidth;
  });

  return {
    type: SET_CALC_RESULT,
    payload: { contentWidth, cardsArr, rowsArr },
  };
};
