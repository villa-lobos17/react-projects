import {combineReducers} from 'redux' //es para combinar los reducers 
import {getUsers} from './UserReducer'

export default combineReducers({
    getUsers
});