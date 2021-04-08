import { createStore } from 'redux';
import { combineReducers } from 'redux';
import imagesReducer from 'redux/reducers/imageReducer';
import calcReducer from 'redux/reducers/calcReducer';

const allReducers = combineReducers({
  imagesReducer,
  calcReducer,
});

const store = createStore(allReducers);

export default store;
