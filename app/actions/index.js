/*
	action creator
*/
import * as types from '../constants/ActionTypes'

//添加留言信息
export const addMsg = (msgObj) => {
	return{
		type: types.ADD_MSG,
		msgObj
	}
}

//删除留言信息
export const delMsg = (index) => {
	return{
		type: types.DEL_MSG,
		index
	}
}

