import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTools';

let finalCreateStore;

if (__DEV__) {
  const middlewares = [
    thunkMiddleware,
  ];

  finalCreateStore = compose(
    // Enables your middleware:
    applyMiddleware(...middlewares),
    // Provides support for DevTools:
    DevTools.instrument()
  )(createStore);
} else {
  const middlewares = [
    thunkMiddleware,
  ];

  finalCreateStore = compose(
    applyMiddleware(...middlewares),
  )(createStore);
}

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
