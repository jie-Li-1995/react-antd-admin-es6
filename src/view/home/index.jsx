import React from 'react'
import  {connect} from 'react-redux'

import {increment, decrement, asyncIncrement} from '../../redux/actions'
import Home from '../../containers/home'


export default connect(
    state => ({time: state.counter}),
    {increment, decrement, asyncIncrement}
)(Home)
