 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
        app : './public/assets/js/app/index.js',
        vendor : ['jquery'],
     },
     output: {
         path: path.resolve(__dirname, 'public/dist/js/'),
         filename: '[name].bundle.js'
     },
     module: {
         loaders: [
             {  
                 test : /\.js$/,
                 include : [
                    path.resolve(__dirname, 'public/assets/js/app/'),
                 ],  
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     plugins : [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'vendor',
            filename : 'vendors.bundle.js',
        }),
        new webpack.optimize.UglifyJsPlugin({
            test : /\.js$/,
            include : [
                'vendor'
            ]
        })
     ],
     stats: {
         colors: true
     },
 };