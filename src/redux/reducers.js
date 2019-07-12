// 保存n个reducer函数的模块
import {combineReducers} from 'redux'
import {INCREMENT, DECREMENT, AUTH_SUCCESS} from './action-types'

function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT :
            return state + action.data
        case DECREMENT :
            return state - action.data
        default:
            return state
    }
}

const userInfoInit = {
    Industry: '',
    Token: '',
    Display: '',
    Role: '',
    RolesSign: ''
}

function userInfo(state = userInfoInit, action) {
    switch (action.type) {
        case AUTH_SUCCESS :
            return {...userInfoInit, ...action.data}
        case DECREMENT :
            return state - action.data
        default:
            return state
    }
}

export default combineReducers({
    counter,
    userInfo
})
