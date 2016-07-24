/*
	子reducer
*/
import * as types from '../constants/ActionTypes'

//初始化state
const initialState = {
	messages: [{
		id:0,
		name: '作者',
		text: '欢迎给我留言',
		time: '2016/7/24'
	}]
}

//留言信息reducer
const todos = (state = initialState,action) => {
	switch(action.type){
		case types.API_DATA:
		return {
			...state,
			messages: action.list
		}

		case types.ADD_MSG:
		return {
				...state,
				messages: [
				...state.messages,
				{
					id: action.msgObj.id,
					name: action.msgObj.name,
					text: action.msgObj.text,
					time: action.msgObj.time
				}
			]
		}

		case types.DEL_MSG:
		return {
				...state,
				messages: state.messages.map((msg,index) => {

				if(typeof msg == 'undefined' || msg == null){
					return
				}
				
				if(index != action.index){
					return {
						...msg,
						id: msg.id,
						name: msg.name,
						text: msg.text,
						time: msg.time
					}
				}
			})
		}

		default:
		return state
	}
}

export default todos

