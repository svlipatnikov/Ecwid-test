import { SET_CALC_RESULT } from 'redux/types';

const calcReducerInit = {
  galeryWidth: window.innerWidth,
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
