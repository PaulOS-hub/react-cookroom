import { createStore, applyMiddleware, combineReducers } from 'redux'
import reducer1 from './reducer'
import showMapReducer from './showMap/reducer'
import thunk from 'redux-thunk'
const store = createStore(
    combineReducers({ reducer1, showMapReducer }),
    applyMiddleware(thunk)
)

export default store