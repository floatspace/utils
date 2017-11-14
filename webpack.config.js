module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true, // 不跳转
        disableHostCheck: true,
        inline: true  //实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    }
};