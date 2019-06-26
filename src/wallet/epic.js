import { combineEpics } from 'redux-observable';
import {
  findWalletHoldingsFundsEpic,
  getWalletHoldingsStatisticEpic
} from './ducks';

export default combineEpics(
  findWalletHoldingsFundsEpic,
  getWalletHoldingsStatisticEpic
);
