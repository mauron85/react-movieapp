import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import movieSaga from './sagas';
import rootReducer from './reducers';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    //noop
  }
};

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState || loadState(),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(movieSaga);

  store.subscribe(() => {
    saveState({
      favourites: store.getState().favourites
    });
  });

  return store;
}
