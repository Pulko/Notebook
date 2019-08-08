import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { reducer } from './reducers/index';
import { initialState } from "./types/index"
import { Provider } from 'react-redux';

export const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
serviceWorker.register();
