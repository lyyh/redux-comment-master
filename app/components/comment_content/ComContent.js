/*
    留言内容    
*/
import React,{findDOMNode} from 'react'
import StyleSheet from './comContent.less'

//当前留言
const getMsgObj = (items) => {
    let localTime = new Date();
    let now = localTime.getFullYear() + '/' + (localTime.getMonth() + 1) + '/' + localTime.getDate() +
        '\t' + localTime.getHours() + ':' + localTime.getMinutes();
    return {
        id: items.messages.length,
        name: document.getElementById('com-name').value,
        text: document.getElementById('com-text').value,
        time: now
    }
}

const ComContent = ({items,addMsgHandler}) => {

    	return (
                <section>
    				<div>
    					<p>
    						<label className='text' >您的留言：(HTML标签部分可用)</label>
    					</p>
    					<textarea rows='10' cols='50' id='com-text' className='com-content'></textarea>
    				</div>
    				<div>
    					<p>
    						<label className='text'>您的大名：</label>
    					</p>
    					<input type='text' className='com-name' id='com-name'/>
    					<span className='hint'>《-必填</span>
    				</div>
    				<div>
    					<input type='button' className='publish' value='发表' onClick={
                            e => {
                            e.preventDefault()
                            addMsgHandler(getMsgObj(items))
                            }
                        }/>
    					<span className='clickBtn'>《-点击按钮</span>
    				</div>
                </section>
    		)
}

export default ComContent;
