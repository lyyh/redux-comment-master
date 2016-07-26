/*
	异步Action Creator(thunk)
*/

import {fetchDataAsync,storeDataAsync} from '../api/api-async'
import * as types from '../constants/ActionTypes'

//获得留言信息
const receiveList = (list) => {
	return {
		type: types.API_DATA,
		list
	}
}

// thunk action creator（得到留言信息）
export const getDataList = () => {
	return dispatch => {
		fetchDataAsync(list => {
			dispatch(receiveList(list))
		})
	}
}

// thunk action creator（创建留言信息）
export const createDataList = (postList) => {
	return dispatch => {
		storeDataAsync((list) => {
			dispatch(receiveList(list))
		},postList)
	}
}
