const {override, fixBabelImports, addLessLoader} = require('customize-cra') // 不要用import

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#2386AA' },
     })
)
