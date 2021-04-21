import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import galeryReducer from 'redux/reducers/galeryReducer';
import calcReducer from 'redux/reducers/calcReducer';
import errorReducer from 'redux/reducers/errorReducer';

const allReducers = combineReducers({
  galeryReducer,
  calcReducer,
  errorReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancer(applyMiddleware(thunk));
const store = createStore(allReducers, middleware);

export default store;
