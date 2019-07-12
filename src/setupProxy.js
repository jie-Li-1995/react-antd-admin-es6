const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/API', {
        target: 'http://siemens-sfll-app.vip.ccwonline.com.cn/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/API": "/API"
        }
    }));
    app.use(proxy('/Index', {
        target: 'http://siemens-sfll-app.vip.ccwonline.com.cn/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/Content": "/Index"
        }
    }))
}
