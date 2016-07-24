/*
	主reducer
*/
import {combineReducers} from 'redux'
import MsgList from './reducer-msgList'

const todoApp = combineReducers({
	MsgList
})

export default todoApp