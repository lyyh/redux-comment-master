import React from 'react'
import ComHeader from '../comment_header/ComHeader'
import ComContenter from '../../containers/ComContenter'

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Comment';
    }
    render() {
        return (
        	<section>
        		<ComHeader/>
        		<ComContenter/>
            </section>
        );
    }
}

export default Comment;
