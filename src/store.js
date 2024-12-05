// src/store.js
import { createStore, combineReducers } from 'redux';
import leadsReducer from './reducers/leadsReducer';

const rootReducer = combineReducers({
  leads: leadsReducer, // combining leads reducer
});

const store = createStore(
  rootReducer,
  // You can add Redux DevTools extension for easier debugging
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
