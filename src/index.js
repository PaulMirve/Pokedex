import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux';
import reducers from './reducers';
import App from './components/App';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>
    ,
    document.querySelector('#root')
);