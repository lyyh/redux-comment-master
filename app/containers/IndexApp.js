import React,{PropTypes} from 'react';
import Comment from '../components/comment/Comment'
import Message from '../components/message/Message'
// import style from './reset.css'
// import style1 from './index.less'

import {connect} from 'react-redux'
import {addMsg,delMsg} from '../actions'
import {store} from '../stores'
import {createDataList} from '../actions/action-async'


class IndexApp extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'IndexApp';
    }
    render() {
    	const {items,addMsgHandler,delMsgHandler} = this.props
        return (
        		<section className='wrap'>
					<Message 
					{...this.props}
					/>
					<Comment
					{...this.props}	
					/>
				</section>
        	)
    }
}

IndexApp.propTypes = {
    items: PropTypes.object.isRequired,
    addMsgHandler: PropTypes.func.isRequired,
    delMsgHandler: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	store.dispatch(createDataList(state.MsgList))
	return {
			items: state.MsgList
		}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMsgHandler: (msgObj) => {	
      dispatch(addMsg(msgObj))
    },
    delMsgHandler:(index) => {
			dispatch(delMsg(index))
	}
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexApp)
