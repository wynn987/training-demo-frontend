import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger'

export default function configureStore(initialState) {
    const middlewares = [];

    middlewares.push(thunk);

    if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
    }
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
}