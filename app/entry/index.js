/*
	程序入口
*/

import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from '../routers'

import css from "../iframe/public/reset.css"
import less from "../iframe/public/index.less"

import {getDataList} from '../actions/action-async'
import {store} from '../stores'


const rootElement = document.getElementById('container')

//初始化留言列表
store.dispatch(getDataList())

ReactDOM.render(
	<AppRouter/>,
	rootElement	
	)