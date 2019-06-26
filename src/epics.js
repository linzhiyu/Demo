import { combineEpics } from 'redux-observable';
import wallet from './wallet';

export default combineEpics(wallet.epic);
