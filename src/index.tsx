import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import rootReducer from './store';
import { getCommentsWatcher } from './store/AllComments/sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleWare)
  )
);

sagaMiddleWare.run(getCommentsWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));
