import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {Token} from './token'
import {User} from './user'

function saveToLocalStorage(state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}

function loadFromLocalStorage() {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            token: Token,
            user: User
        }),
        persistedState,
        composeEnhancers(applyMiddleware(thunk))
    );

    store.subscribe(() => saveToLocalStorage(store.getState()))
    return store;
}