import { SET_GALERY_WIDTH, SET_CALC_RESULT } from '../types';

const calcReducerInit = {
  contentWidth: window.innerWidth,
  galeryWidth: window.innerWidth,
  cardsArr: [],
  rowsArr: [],
};

const calcReducer = (state = calcReducerInit, action) => {
  switch (action.type) {
    case SET_GALERY_WIDTH:
      return { ...state, galeryWidth: action.payload };

    case SET_CALC_RESULT:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default calcReducer;
