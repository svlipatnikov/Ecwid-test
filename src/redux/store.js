import { createStore } from 'redux';
import { combineReducers } from 'redux';
import imagesReducer from 'redux/reducers/galeryReducer';
import calcReducer from 'redux/reducers/calcReducer';

const allReducers = combineReducers({
  imagesReducer,
  calcReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
