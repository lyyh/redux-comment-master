import {connect} from 'react-redux'
import {addMsg} from '../actions'
import ComContent from '../components/comment_content/ComContent'
import {store} from '../stores'
import {createDataList} from '../actions/action-message'

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
    }
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ComContent)