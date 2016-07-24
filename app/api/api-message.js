/*
	评论区首页数据接口
*/
import fetch from 'isomorphic-fetch'

//从cookie中异步获取信息
export const fetchDataAsync = (callback) => {
	fetch('/data',{
		//发送cookie
		credentials: 'same-origin'
	})
	.then(response => response.json())
	.then(json => {
		callback(json)
	})
	.catch(e => {
		console.log(e)
	})
}

//异步存储信息进cookie
export const storeDataAsync = (callback,postList) => {
	fetch('/postList',{
		//发送cookie
		credentials: 'same-origin',
		method: 'post',
		headers: {
			 'Accept': 'application/json',
        	 "Content-Type": "application/json"
		},
		body: JSON.stringify(postList),
	})
	.catch(e => {
		console.log(e)
	})
}

