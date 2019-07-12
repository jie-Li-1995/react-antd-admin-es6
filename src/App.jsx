import React, {Component} from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import Main from './view/main'
import Login from './view/login'

const div1 = {
    height: '100vh'
};

class App extends Component {
    render() {
        return (
            <div className="App" style={div1}>
                <HashRouter>
                   <Switch>
                       <Route path='/login' component={Login} />
                       <Route path='/Main' component={Main} />
                       <Redirect to='/login' />
                   </Switch>
                </HashRouter>
            </div>
        )
    }
}

export default App
