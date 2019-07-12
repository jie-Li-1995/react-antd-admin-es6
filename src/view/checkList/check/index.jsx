import React, { Component } from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import ChecklistTemplate from "../checklistTemplate"
import CheckList from "../checkList"
import CreateChecklist from "../createChecklist"
import ViewChecklist from "../viewChecklist"
import {Layout} from "antd"
const {Content} = Layout

export default class check extends Component {
    constructor (props) {
        super(props)
        this.state = {
            Name: 'liu_rui@siemens.com',
            Password: '12345678'
        }
    }

    componentWillMount() {
    }

    render () {
        return (
            <div>
                check - wrap
                <Content style={{padding: '0 50px'}}>
                    <div style={{background: '#fff', padding: 20, minHeight: 280}}>
                        <HashRouter>
                            <Switch>
                                <Route path={`${this.props.match.path}/checkList`}
                                       component={CheckList}/>
                                <Route path={`${this.props.match.path}/checklistTemplate`}
                                       component={ChecklistTemplate}/>
                                <Route path={`${this.props.match.path}/createChecklist`}
                                       component={CreateChecklist}/>
                                <Route path={`${this.props.match.path}/viewChecklist`}
                                       component={ViewChecklist}/>
                                <Redirect to={`${this.props.match.path}/checkList`}/>
                            </Switch>
                        </HashRouter>
                    </div>
                </Content>
            </div>
        )
    }
}
