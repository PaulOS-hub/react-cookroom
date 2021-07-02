const {
    override,
    fixBabelImports,
    addWebpackResolve,
    addWebpackAlias,
    addLessLoader,
    addDecoratorsLegacy
} = require('customize-cra');
const path = require('path')
module.exports = override(
    addLessLoader({
        // 现在的写法
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@brand-primary': '#1DA57A' },
        },
    }),
    // antd style按需引入
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // webpack reolve，扩展目录别名，
    addWebpackResolve({
        extensions: ['.js', '.jsx', '.json']
    }),
    // webpack reolve 扩展名。
    addWebpackAlias({
        '@': path.join(__dirname, "src"),
        "assets": path.join(__dirname, "src/assets")
    }),
    // yarn add plu
    addDecoratorsLegacy()
);