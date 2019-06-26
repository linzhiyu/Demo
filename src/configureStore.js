import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, autoRehydrate } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/constants';
import createActionBuffer from 'redux-action-buffer';
import createMigration from 'redux-persist-migrate';
import createLogger from 'redux-logger';
import rootReducer from './ducks';
import rootEpic from './epics';

export const configureApi = _store => {
  store = _store;
};

const epicMiddleware = createEpicMiddleware(rootEpic);

let middleware = [epicMiddleware, createActionBuffer(REHYDRATE)];

/* global __DEV__*/
if (__DEV__) {
  const createLogger = require('redux-logger');

  middleware = [...middleware, createLogger()];
}

export default function configureStore() {
  const enhancer = compose(
    autoRehydrate(),
    applyMiddleware(...middleware)
  );

  configureApi(store);
  const store = createStore(rootReducer, {}, enhancer);
  if (module.hot) {
    // hot reload epics
    module.hot.accept('./epics', () => {
      const nextRootEpic = require('./epics').default;

      epicMiddleware.replaceEpic(nextRootEpic);
    });

    // hot reload reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./ducks').default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
