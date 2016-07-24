import React from 'react';
import Comment from '../comment/Comment'
import Messager from '../../containers/Messager'
import Message from '../message/Message'
import StyleSheet1 from './reset.css'
import StyleSheet from './index.less'

const App = () => (
		<section className='wrap'>
			<Messager/>
			<Comment/>
		</section>
)

export default App