import React, {Component} from 'react'
import {Button, message, Input} from "antd"
import {connect} from 'react-redux'

import './index.less'
import {LoginApi} from '../../api'
import {ChangeUserInfo} from '../../redux/actions'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: 'liu_rui@siemens.com',
            Password: '12345678',
        }
    }

    handleChange = (name, val) => {
        this.setState({[name]: val.target.value})

    }

    login = async () => {
        if (this.state.Name.trim() === '') {
            message.warning('Please  enter UserName')
            this.refs.username.focus()
            return
        }
        if (this.state.Password.trim() === '') {
            message.warning('Please  enter Password')
            this.refs.password.focus()
            return
        }
        let res = await LoginApi.SFLLLogin({...this.state})
        if (res.data.Success) {
            this.props.ChangeUserInfo(res.data)
            console.log(this.props.history)
            this.props.history.push({pathname: '/main', state: {day: 'Friday'}})
        } else {
            message.warning(res.data.Message)
        }
    }

    render() {
        return (
            <div className='clear-fix login'>
                {/*{this.props.userInfo.Display}*/}
                <div className="wrap">
                    <div className="showLogo">
                        <img className="logo" src={require('../../assets/img/Logo.jpg')} alt='没有加载完'/>
                        <div className="text">
                            <p>Welcome to </p>
                            <p>Siemens SFLL</p>
                        </div>
                    </div>
                    <div className="loginBox">
                        <p>LOGIN</p>
                        <p>It’s so nice to see you！</p>
                        <Input className="item" placeholder="UserName" ref="username"
                               onChange={val => {
                                   this.handleChange('Name', val)
                               }}
                               defaultValue={this.state.Name}
                               autoFocus="autofocus"
                        />
                        <Input className="item" ref="password" type="Password"
                               placeholder="Password"
                               onChange={val => {
                                   this.handleChange('Password', val)
                               }} defaultValue={this.state.Name}
                        />
                        <Button className="btn" onClick={this.login}>Login</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({userInfo: state.userInfo}),
    {ChangeUserInfo}
)(Login)
