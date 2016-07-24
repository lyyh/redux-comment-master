import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from '../components/app/App'
import {getDataList} from '../actions/action-message'
import {store} from '../stores'

const root = document.getElementById('container')

store.dispatch(getDataList())

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	root	
	)