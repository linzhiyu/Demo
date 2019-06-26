import { combineReducers } from 'redux';
import { createRequestEpicDucks } from 'redux-observable-utils';
import * as api from './api';

export const NAME = 'WALLET';

export const {
  ducks: findWalletHoldingsFundsDucks,
  epic: findWalletHoldingsFundsEpic
} = createRequestEpicDucks({
  moduleName: NAME,
  reducerName: 'FIND_WALLET_HOLDINGS',
  api: api.findWalletHoldingsFunds
});

export const {
  ducks: getWalletHoldingsStatisticDucks,
  epic: getWalletHoldingsStatisticEpic
} = createRequestEpicDucks({
  moduleName: NAME,
  reducerName: 'GET_WALLET_HOLDINGS_STATISTIC',
  api: api.getWalletHoldingsStatistic
});

export default combineReducers({
  [findWalletHoldingsFundsDucks.reducerName]:
    findWalletHoldingsFundsDucks.reducer,
  [getWalletHoldingsStatisticDucks.reducerName]:
    getWalletHoldingsStatisticDucks.reducer
});
