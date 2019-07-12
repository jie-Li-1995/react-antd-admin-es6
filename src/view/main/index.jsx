import React, {Component} from 'react'
import {Layout, Menu} from 'antd'
import {HashRouter, Route, Switch} from 'react-router-dom'

import MyHeader from '../../components/header'
import './index.less'

import ContentItem from '../contentManagement/content'
import Article from '../contentManagement/article'
import Columns from '../contentManagement/columns'
import SearchArticle from '../contentManagement/searchArticle'
import MessageList from '../contentManagement/messageList'

import check from '../checkList/check'
const {Header, Footer, Content} = Layout
const SubMenu = Menu.SubMenu

export default class Main extends Component {

    componentDidMount() {
    }

    handleClick = (e) => {
        this.props.history.push({pathname: e.key})
    }

    render() {
        return (
            <Layout className="layout">
                <MyHeader/>
                <Header>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.props.history.location.pathname]}
                        mode="horizontal"
                    >
                        <SubMenu key="/main/contentManagement"
                                 title={<span className="submenu-title-wrapper">Content Management</span>}>
                            <Menu.Item key="/main/contentManagement/columns">Columns</Menu.Item>
                            <Menu.Item key="/main/contentManagement/article">Article</Menu.Item>
                            <Menu.Item key="/main/contentManagement/messageList">Message List</Menu.Item>
                            <Menu.Item key="/main/contentManagement/searchArticle">Search Article</Menu.Item>
                        </SubMenu>
                        <SubMenu key="/main/checkList/"
                                 title={<span className="submenu-title-wrapper2">Aquisition</span>}>
                            <Menu.Item key="/main/check/checkList">Checklist</Menu.Item>
                            <Menu.Item key="/main/check/createChecklist">Create Checklist</Menu.Item>
                            <Menu.Item key="/main/check/viewChecklist">View Checklist</Menu.Item>
                            <Menu.Item key="/main/check/checklistTemplate">Checklist Template</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="/main/2222">22222</Menu.Item>
                        <Menu.Item key="/main/setting:1">Option 1</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <div style={{background: '#fff', padding: 20, minHeight: 280}}>
                        <HashRouter>
                            <Switch>
                                <Route path={`${this.props.match.url}/contentManagement/content`}
                                       component={ContentItem}/>
                                <Route path={`${this.props.match.url}/contentManagement/article`} component={Article}/>
                                <Route path={`${this.props.match.url}/contentManagement/columns`} component={Columns}/>
                                <Route path={`${this.props.match.url}/contentManagement/searchArticle`}
                                       component={SearchArticle}/>
                                <Route path={`${this.props.match.url}/contentManagement/messageList`}
                                       component={MessageList}/>
                                <Route path={`${this.props.match.url}/check`}
                                       component={check}/>
                            </Switch>
                        </HashRouter>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}
