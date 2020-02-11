const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader', options:{
                        sourceMap: true //le o estilo tal como nos escrevemos
                    } // adicionar o css à dom
                },
                {
                    loader: 'css-loader', options:{
                        sourceMap:true
                    } //adicionar css loader interpreta sass 
                },
                {
                    loader: 'sass-loader', options:{
                        sourceMap: true //le o estilo tal como nos escrevemos
                    } // adicionar o css à dom //compila ficheiro sass to css
                }
            ]}
        ]
    },
    resolve: {
        extensions:['*', '.js', '.jsx' ]
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/', 
        filename:'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};