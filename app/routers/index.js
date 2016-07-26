/*
    react路由
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, Link,hashHistory,IndexRoute } from 'react-router'
import {store} from '../stores'
import IndexApp from '../containers/IndexApp'



class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AppRouter';
    }
    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/'>
                        <IndexRoute component={IndexApp} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default AppRouter
