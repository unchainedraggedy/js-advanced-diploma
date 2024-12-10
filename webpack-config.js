const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/, 
                type: 'asset',  
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,  
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,  
                type: 'asset/resource',  
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin()
    ],
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist'), 
    },
}
