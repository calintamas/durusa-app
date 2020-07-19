import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const logger = createLogger({
  collapsed: true,
  logger: console
});

const store = createStore(
  rootReducer,
  __DEV__ ? applyMiddleware(thunk, logger) : applyMiddleware(thunk)
);

export const persistor = persistStore(store);

export default store;
