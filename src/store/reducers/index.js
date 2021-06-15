import {combineReducers} from 'redux'
import post from './postreducer'
import user from './userreducer'
export const reducer = combineReducers({
    post,
    user,
})