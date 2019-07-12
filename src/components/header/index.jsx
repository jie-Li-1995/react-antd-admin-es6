import React, {Component} from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'

import './index.less'

class MyHeader extends Component {
    render() {
        return (
            <div className="header clear-fix">
                <div className="user clear-fix">
                    <div className="nts-comp nts-logo">
                        <a href="http://www.siemens.com/" className="logo">
                            <img src={require('../../assets/siemens-logo-en-2x.png')} alt="logo"
                                 className="cq-dd-image"/>
                        </a>
                        <a href="http://www.siemens.com/" className="logoClaim">
                            <img src={require("../../assets/siemens-logo-claim-en-2x.png")} alt="logo"
                                 className="cq-dd-image"/>
                        </a>
                    </div>
                    <div className="user-info">
                        Welcome<span>, {this.props.userInfo.Display}</span>
                        <Button className="exit" type='primary'>Exit</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({userInfo: state.userInfo}),
)(MyHeader)
