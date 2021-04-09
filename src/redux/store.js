import { createStore } from 'redux';
import { combineReducers } from 'redux';
import imagesReducer from 'redux/reducers/galeryReducer';
import calcReducer from 'redux/reducers/calcReducer';

const allReducers = combineReducers({
  imagesReducer,
  calcReducer,
});

const store = createStore(allReducers);

export default store;
