import { IS_CHANGED, SET_GALERY_WIDTH, SET_CALC_RESULT } from '../types';

const calcReducerInit = {
  isChanged: true,
  galeryWidth: window.innerWidth,
  cardsArr: [],
  rowsArr: [],
};

const calcReducer = (state = calcReducerInit, action) => {
  switch (action.type) {
    case IS_CHANGED:
      return { ...state, isChanged: true };

    case SET_GALERY_WIDTH:
      return { ...state, galeryWidth: action.payload, isChanged: true };

    case SET_CALC_RESULT:
      return { ...state, ...action.payload, isChanged: false };

    default:
      return state;
  }
};

export default calcReducer;
