import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {
    convertCurrency
} from "./sagas";

import * as reducers from "./reducers";

const rootReducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(convertCurrency);
    return store;
}

export default configureStore;