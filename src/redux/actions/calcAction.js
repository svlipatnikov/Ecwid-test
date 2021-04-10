import { IS_CHANGED, SET_CALC_RESULT, SET_GALERY_WIDTH } from 'redux/types';
import { rowNormalHeight } from 'restrictions';
import store from 'redux/store';

export const isChangedAction = () => ({ type: IS_CHANGED });

export const setGaleryWidthAction = (galeryWidth) => ({
  type: SET_GALERY_WIDTH,
  payload: galeryWidth,
});

export const setCalcResultAction = (galery) => {
  // get galeryWidth
  const galeryWidth = store.getState().calcReducer.galeryWidth;

  // calc cardsArr & rowsArr
  const cardsArr = [];
  const rowsArr = [];
  let rowNumber = 0;
  let rowWidth = 0;

  galery.forEach((image, index) => {
    const cardNormalWidth = (rowNormalHeight / image.height) * image.width;

    if (rowWidth + cardNormalWidth > galeryWidth) {
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
    payload: { cardsArr, rowsArr },
  };
};
