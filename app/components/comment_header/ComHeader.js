//留言头
import React from 'react';
import StyleSheet from './ComHeader.less';

class ComHeader extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ComHeader';
    }
    render() {
    	return(
    		<div className='header'>
    			<h1>我要发表看法</h1>
    		</div>
    		)
    }
}

export default ComHeader;
