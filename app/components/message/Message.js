//留言信息
import React,{PropTypes} from 'react'
import StyleSheet from './message.less'

//所有留言

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Message';
    }
    render() {
    	const {items,delMsgHandler} = this.props

    	let msgNum = 0

    	const isDelMsg = (listItem,i) => {
    		if(i == 0){
    			return 
    		}else{
    			return (
    				<a className='msg-delete' value={listItem.id} onClick={
					e => {
						let index = e.target.getAttribute('value')
						e.preventDefault()
						delMsgHandler(index)
					}
				} > 删除该评论 < /a>
					)
    		}
    	}

		const getMsgList = items.messages.map((listItem,i) => {

			if(typeof listItem == 'undefined' || listItem == null ){
				return 
			}

			++msgNum 

			return (
				<section key={i} className='msg-main'>
					<div className='msg-header'>
						<p>
							<span className='msg-name'>{listItem.name}</span>说：
							{isDelMsg(listItem,i)}
						</p>
					</div>
					<div className='msg-content'>
						<p className='msg-content-word'>
						{listItem.text}
						</p>
					</div>
					<div className='msg-footer'>
						<p className='msg-time'>{listItem.time}</p>
					</div>
				</section>
					)
		})


        return (
        	<section>
				<div className='msg-title'>留言(<span className='msg-num'>{msgNum}</span>条)</div>
				<div>{getMsgList}</div>
			</section>
        )
    }
}

Message.PropTypes = {
    items: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    }).isRequired).isRequired).isRequired,
    delMsgHandler: PropTypes.func.isRequired
}

export default Message;
