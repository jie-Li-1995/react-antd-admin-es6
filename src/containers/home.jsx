import PropTypes from "prop-types"
import React, {Component} from "react"
import {asyncIncrement} from "../redux/actions";

export default class Home extends Component {
    static propType = {
        time: PropTypes.number.isRequired,
        add: PropTypes.func.isRequired,
        cut: PropTypes.func.isRequired,
        asyncIncrement: PropTypes.func.isRequired,

    }
    constructor(props) {
        super(props)
    }

    add = () => {
        let Number = this.refs.MySelect.value * 1
        this.props.increment(Number)
    }

    cut = () => {
        let Number = this.refs.MySelect.value * 1
        this.props.decrement(Number)
    }

    OddAdd = () => {
        let time = this.props.time
        if (time % 2 === 0) {
            this.add()
        }
    }

    AsyncAdd = () => {
        let Number = this.refs.MySelect.value * 1
        this.props.asyncIncrement(Number)
    }

    render() {
        let time = this.props.time
        return (
            <div>
                <h1>{time}</h1>
                <div>
                    <select ref="MySelect">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={this.add}>+</button>
                    &nbsp;&nbsp;
                    <button onClick={this.cut}>-</button>
                    &nbsp;&nbsp;
                    <button onClick={this.OddAdd}>increment if odd</button>
                    &nbsp;&nbsp;
                    <button onClick={this.AsyncAdd}>increment Async</button>
                    &nbsp;&nbsp;
                </div>
            </div>
        )
    }
}
