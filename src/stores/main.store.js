import { createStore }                  from 'redux';
import mainReducer                      from '../reducers/root';
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage }                 from 'react-native'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['components', 'commomn', 'members'] // navigation will not be persisted
}

const persistedReducer = persistReducer(persistConfig, mainReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);


const getState = () => {
    return store.getState();
};

export {
    store,
    persistor,
    getState
};
