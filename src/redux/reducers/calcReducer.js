import { SET_CONTENT_WIDTH } from '../types';

const calcReducerInit = {
  contentWidth: window.outerWidth,
  // imageRowNumber: [],
  // rowsWidth: [],
  // rowsScale: [],
};

const calcReducer = (state = calcReducerInit, action) => {
  switch (action.type) {
    case SET_CONTENT_WIDTH:
      return { ...state, contentWidth: action.payload };

    // case CALC_IMAGE_ROW_NUMBER:
    //   return { ...state, imageRowNumber: action.payload };

    // case CALC_ROWS_WIDTH:
    //   return { ...state, rowsWidth: action.payload };

    // case CALC_ROWS_SCALE:
    //   return { ...state, rowsWidth: action.payload };

    default:
      return state;
  }
};

export default calcReducer;
