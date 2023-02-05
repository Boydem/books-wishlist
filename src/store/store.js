import { combineReducers, legacy_createStore } from 'redux'

import { systemReducer } from './system.reducer'
import { bookReducer } from './book/book.reducer.js'

const rootReducer = combineReducers({
    systemModule: systemReducer,
    bookModule: bookReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : undefined
export const store = legacy_createStore(rootReducer, middleware)

// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })
