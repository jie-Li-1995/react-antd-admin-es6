import axios from 'axios'
import {HashRouter} from 'react-router-dom'
import {token} from '../utils'

axios.interceptors.request.use((config) => {
    console.log('我是发送前')
    let routerC = config.url
    const myToken = token.get() || ''
    if (myToken !== '') {
        config.headers.AuthToken = myToken
    }
    if (routerC === '/CRM/SubmitVisitRecord' || routerC === '/CRM/SaveVisitRecord') {
        config.headers['content-type'] = 'application/x-www-form-urlencoded'
    }
    return config
}, function (err) {
    return Promise.reject(err)
})

axios.interceptors.response.use((res) => {
    console.log('我是发送后')
    let myToken = ''
    if (res.data.Token !== null) {
        if (!res.data.Token) {
            myToken = res.data.data ? res.data.data.Token : ''
        } else {
            myToken = res.data ? res.data.Token : ''
        }
        if (myToken !== undefined && myToken !== '' && myToken !== null) {
            token.set(myToken)
        } else {
            const router = new HashRouter()
            router.history.push('/')
        }
    }
    return res
}, function (error) {
    return Promise.reject(error)
})

export default axios
