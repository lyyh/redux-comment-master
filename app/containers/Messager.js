import {connect} from 'react-redux'
import {delMsg} from '../actions'
import Message from '../components/message/Message'

const mapStateToProps = (state) => {
	return {
			items: state.MsgList,
		}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		delMsgHandler:(index) => {
			dispatch(delMsg(index))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Message)