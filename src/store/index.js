import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';
import {ENABLE_REDUX_LOGGER} from '../config';

const loggerMiddleware = createLogger();

const middlewares = [thunkMiddleware];

if (ENABLE_REDUX_LOGGER) {
    middlewares.push(loggerMiddleware);
}

const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
);

const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

export default createStore(rootReducer, {}, composedEnhancers);
