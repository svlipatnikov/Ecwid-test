import { ADD_NEW_ERROR, DELETE_ERROR } from 'redux/types';

const initMainReducerState = {
  errors: [],
};

const errorReducer = (state = initMainReducerState, action) => {
  switch (action.type) {
    case ADD_NEW_ERROR:
      return { ...state, errors: [...state.errors, action.payload] };

    case DELETE_ERROR:
      return {
        ...state,
        errors: state.errors.filter((err) => err !== action.payload),
      };

    default:
      return state;
  }
};

export default errorReducer;
