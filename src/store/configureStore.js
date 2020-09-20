import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import rootReducer from '../reducer';

export default function configureStore() {
    const persistedState = {}
    const store = createStore(
        rootReducer,
        persistedState,
        compose(
            applyMiddleware(thunkMiddleware)
        )
    );
    return store;
}