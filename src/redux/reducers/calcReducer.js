import { SET_CALC_RESULT } from '../types';

const calcReducerInit = {
  contentWidth: window.outerWidth,
  cardsArr: [],
  rowsArr: [],
};

const calcReducer = (state = calcReducerInit, action) => {
  switch (action.type) {
    case SET_CALC_RESULT:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default calcReducer;
