import { combineReducers } from 'redux';
import wallet from './wallet';

const appReducer = combineReducers({
  migration: (state = {}) => state, // This reducer will be used to store the version
  [wallet.ducks.NAME]: wallet.reducer
});

export default (state, action) => {
  return appReducer(state, action);
};
