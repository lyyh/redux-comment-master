/*
    留言内容    
*/
import React,{PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import StyleSheet from './comContent.less'

import {getMsgObj,} from '../../api'

class ComContent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ComContent';
    }
    render() {
        const {items,addMsgHandler} = this.props
        return (
                <section>
                    <div>
                        <p>
                            <label className='text' >您的留言：(HTML标签部分可用)</label>
                        </p>
                        <textarea rows='10' cols='50' className='com-content' ref='text'></textarea>
                    </div>
                    <div>
                        <p>
                            <label className='text'>您的大名：</label>
                        </p>
                        <input type='text' className='com-name' ref='name'/>
                        <span className='hint'>《-必填</span>
                    </div>
                    <div>
                        <input type='button' className='publish' value='发表' onClick={
                            e => {
                            e.preventDefault()
                            
                            addMsgHandler(getMsgObj(items,{
                                name: this.refs.name.value,
                                text: this.refs.name.value
                                // name: findDOMNode(this.refs.name).value,
                                // text: findDOMNode(this.refs.text).value
                            }))
                            }
                        }/>
                        <span className='clickBtn'>《-点击按钮</span>
                    </div>
                </section>
            )
    }
}

ComContent.PropTypes = {
    items: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    }).isRequired).isRequired).isRequired,
    addMsgHandler: PropTypes.func.isRequired
}

export default ComContent;