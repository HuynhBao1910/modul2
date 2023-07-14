// store/index.js

import { createStore, combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;