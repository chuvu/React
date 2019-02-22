var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');

var config = {
    entry: ['./src/js/index.jsx', './src/js/analytics.js'],
    output: {
        path: path.join(__dirname, 'assets/'),
        publicPath: process.env.NODE_ENV == 'production' ? '/mahjongg-react/assets' : '/assets',
        filename: '/js/[name].js',
        chunkFilename: "/js/chunk-[id].js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('/css/style.css'),
        new CopyWebpackPlugin([
            {from: './src/i', to: 'i'}
        ])
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: /src/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'react-optimize']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(['css', 'less'])
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "file-loader?name=/i/[name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

module.exports = config;
