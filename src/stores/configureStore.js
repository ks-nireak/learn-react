import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

//  Returns the store instance
// It can  also take initialState argument when provided

const sagaMiddleware = createSagaMiddleware()
const configureStore = () => {
  return {
    ...createStore(rootReducer,
    applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}

export default configureStore;
