import { SET_CALC_RESULT, SET_GALERY_WIDTH } from 'redux/types';
import { rowNormalHeight } from 'restrictions';
import store from 'redux/store';

const setGaleryWidthAction = (galeryWidth) => ({
  type: SET_GALERY_WIDTH,
  payload: Math.ceil(galeryWidth),
});

export const handleGaleryWidthAction = (newWidth) => (dispatch) => {
  const galeryWidth = store.getState().calcReducer.galeryWidth;
  if (newWidth !== galeryWidth) {
    dispatch(setGaleryWidthAction(newWidth));
    dispatch(setCalcResultAction());
  }
};

export const setCalcResultAction = () => {
  const galery = store.getState().galeryReducer.galleryImages;
  const galeryWidth = store.getState().calcReducer.galeryWidth;

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

    cardsArr[index] = {
      index,
      cardNormalWidth,
      rowNumber,
    };

    rowsArr[rowNumber] = Math.ceil(rowWidth);
  });

  return {
    type: SET_CALC_RESULT,
    payload: { cardsArr, rowsArr },
  };
};
