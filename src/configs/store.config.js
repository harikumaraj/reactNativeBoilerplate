import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

middlewares = () => {
    const middlewares = [thunk];
    if(__DEV__) {
        middlewares.push[logger];
    }
    return middlewares;
}

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares()))
    let persistor = persistStore(store)
    return { store, persistor }
}