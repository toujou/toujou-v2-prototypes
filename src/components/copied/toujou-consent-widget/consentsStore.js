import { createStore, compose } from 'redux';
import consentReducer from './reducers/consent-reducers';
import { toujouLoadStorageState } from './store-persistence';

function configureStore() {
  // eslint-disable-next-line no-underscore-dangle,max-len,no-mixed-operators
  const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose);
  const composedEnhancers = composeEnhancers();
  const persistedState = toujouLoadStorageState();

  return createStore(
    consentReducer,
    persistedState,
    composedEnhancers,
  );
}

// eslint-disable-next-line import/prefer-default-export
export const consentsStore = configureStore();
