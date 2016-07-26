import React,{PropTypes} from 'react'
import ComHead from '../comment_header/ComHeader'
import ComContent from '../comment_content/ComContent'

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Comment';
    }
    render() {
        const {items,addMsgHandler} = this.props
        return (
        	<section>
        		<ComHead/>
        		<ComContent 
                items = {items}
                addMsgHandler = {addMsgHandler}
                />
            </section>
        );
    }
}

Comment.PropTypes = {
    items: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    }).isRequired).isRequired).isRequired,
    addMsgHandler: PropTypes.func.isRequired
}

export default Comment;
